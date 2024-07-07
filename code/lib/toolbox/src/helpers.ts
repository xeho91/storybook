import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { satisfies } from 'semver';
import stripJsonComments from 'strip-json-comments';

import findUp from 'find-up';
import {
  frameworkToRenderer as CoreFrameworkToRenderer,
  type JsPackageManager,
  type PackageJson,
  type PackageJsonWithDepsAndDevDeps,
  versions as storybookMonorepoPackages,
} from '@storybook/core/common';

const logger = console;

export function readFileAsJson(jsonPath: string, allowComments?: boolean) {
  const filePath = path.resolve(jsonPath);
  if (!fs.existsSync(filePath)) {
    return false;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const jsonContent = allowComments ? stripJsonComments(fileContent) : fileContent;

  try {
    return JSON.parse(jsonContent);
  } catch (e) {
    logger.error(chalk.red(`Invalid json in file: ${filePath}`));
    throw e;
  }
}

export const writeFileAsJson = (jsonPath: string, content: unknown) => {
  const filePath = path.resolve(jsonPath);
  if (!fs.existsSync(filePath)) {
    return false;
  }

  fs.writeFileSync(filePath, `${JSON.stringify(content, null, 2)}\n`);
  return true;
};

/**
 * Detect if any babel dependencies need to be added to the project
 * This is currently used by react-native generator
 * @param {Object} packageJson The current package.json so we can inspect its contents
 * @returns {Array} Contains the packages and versions that need to be installed
 * @example
 * const babelDependencies = await getBabelDependencies(packageManager, npmOptions, packageJson);
 * // you can then spread the result when using installDependencies
 * installDependencies(npmOptions, [
 *   `@storybook/react@${storybookVersion}`,
 *   ...babelDependencies,
 * ]);
 */
export async function getBabelDependencies(
  packageManager: JsPackageManager,
  packageJson: PackageJsonWithDepsAndDevDeps
) {
  const dependenciesToAdd = [];
  let babelLoaderVersion = '^8.0.0-0';

  const babelCoreVersion =
    packageJson.dependencies['babel-core'] || packageJson.devDependencies['babel-core'];

  if (!babelCoreVersion) {
    if (!packageJson.dependencies['@babel/core'] && !packageJson.devDependencies['@babel/core']) {
      const babelCoreInstallVersion = await packageManager.getVersion('@babel/core');
      dependenciesToAdd.push(`@babel/core@${babelCoreInstallVersion}`);
    }
  } else {
    const latestCompatibleBabelVersion = await packageManager.latestVersion(
      'babel-core',
      babelCoreVersion
    );
    // Babel 6
    if (satisfies(latestCompatibleBabelVersion, '^6.0.0')) {
      babelLoaderVersion = '^7.0.0';
    }
  }

  if (!packageJson.dependencies['babel-loader'] && !packageJson.devDependencies['babel-loader']) {
    const babelLoaderInstallVersion = await packageManager.getVersion(
      'babel-loader',
      babelLoaderVersion
    );
    dependenciesToAdd.push(`babel-loader@${babelLoaderInstallVersion}`);
  }

  return dependenciesToAdd;
}

export function addToDevDependenciesIfNotPresent(
  packageJson: PackageJson,
  name: string,
  packageVersion: string
) {
  if (!packageJson.dependencies?.[name] && !packageJson.devDependencies?.[name]) {
    if (packageJson.devDependencies) {
      packageJson.devDependencies[name] = packageVersion;
    } else {
      packageJson.devDependencies = {
        [name]: packageVersion,
      };
    }
  }
}

/**
 * @deprecated Please use `frameworkToRenderer` from `@storybook/core-common` instead
 */
export const frameworkToRenderer = CoreFrameworkToRenderer;

// Given a package.json, finds any official storybook package within it
// and if it exists, returns the version of that package from the specified package.json
export function getStorybookVersionSpecifier(packageJson: PackageJsonWithDepsAndDevDeps) {
  const allDeps = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
    ...packageJson.optionalDependencies,
  };
  const storybookPackage = Object.keys(allDeps).find((name: string) => {
    return storybookMonorepoPackages[name as keyof typeof storybookMonorepoPackages];
  });

  if (!storybookPackage) {
    throw new Error(`Couldn't find any official storybook packages in package.json`);
  }

  return allDeps[storybookPackage];
}

export async function isNxProject() {
  return findUp.sync('nx.json');
}

export async function hasStorybookDependencies(packageManager: JsPackageManager) {
  const currentPackageDeps = await packageManager.getAllDependencies();

  return Object.keys(currentPackageDeps).some((dep) => dep.includes('storybook'));
}
