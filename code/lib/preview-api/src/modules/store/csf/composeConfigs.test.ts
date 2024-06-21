import { describe, beforeEach, afterEach, it, expect, vi } from 'vitest';
import { global } from '@storybook/global';

import { composeConfigs } from './composeConfigs';

vi.mock('@storybook/global', () => ({
  global: {
    FEATURES: {},
  },
}));

describe('composeConfigs', () => {
  it('sets default (empty) values for fields', () => {
    expect(composeConfigs([])).toMatchInlineSnapshot(`
      {
        "applyDecorators": undefined,
        "argTypes": {},
        "argTypesEnhancers": [
          [Function],
          [Function],
        ],
        "args": {},
        "argsEnhancers": [],
        "beforeEach": [],
        "decorators": [],
        "globalTypes": {},
        "globals": {},
        "loaders": [],
        "mount": undefined,
        "parameters": {},
        "render": undefined,
        "renderToCanvas": undefined,
        "renderToDOM": undefined,
        "runStep": [Function],
        "tags": [],
        "testingLibraryRender": undefined,
      }
    `);
  });

  it('composes parameters', () => {
    expect(
      composeConfigs([
        {
          parameters: { obj: { a: '1', b: '1' } },
        },
        {
          parameters: { obj: { a: '2', c: '2' } },
        },
      ])
    ).toMatchInlineSnapshot(`
      {
        "applyDecorators": undefined,
        "argTypes": {},
        "argTypesEnhancers": [
          [Function],
          [Function],
        ],
        "args": {},
        "argsEnhancers": [],
        "beforeEach": [],
        "decorators": [],
        "globalTypes": {},
        "globals": {},
        "loaders": [],
        "mount": undefined,
        "parameters": {
          "obj": {
            "a": "2",
            "b": "1",
            "c": "2",
          },
        },
        "render": undefined,
        "renderToCanvas": undefined,
        "renderToDOM": undefined,
        "runStep": [Function],
        "tags": [],
        "testingLibraryRender": undefined,
      }
    `);
  });

  it('composes export defaults', () => {
    expect(
      composeConfigs([
        {
          default: {
            parameters: { obj: { a: '1', b: '1' } },
          },
        },
        {
          default: {
            parameters: { obj: { a: '2', c: '2' } },
          },
        },
      ])
    ).toMatchInlineSnapshot(`
      {
        "applyDecorators": undefined,
        "argTypes": {},
        "argTypesEnhancers": [
          [Function],
          [Function],
        ],
        "args": {},
        "argsEnhancers": [],
        "beforeEach": [],
        "decorators": [],
        "globalTypes": {},
        "globals": {},
        "loaders": [],
        "mount": undefined,
        "parameters": {
          "obj": {
            "a": "2",
            "b": "1",
            "c": "2",
          },
        },
        "render": undefined,
        "renderToCanvas": undefined,
        "renderToDOM": undefined,
        "runStep": [Function],
        "tags": [],
        "testingLibraryRender": undefined,
      }
    `);
  });

  it('overrides object fields by key', () => {
    expect(
      composeConfigs([
        {
          default: {
            args: { x: '1', y: '1', obj: { a: '1', b: '1' } },
            argTypes: { x: '1', y: '1', obj: { a: '1', b: '1' } },
            globals: { x: '1', y: '1', obj: { a: '1', b: '1' } },
            globalTypes: { x: '1', y: '1', obj: { a: '1', b: '1' } },
          },
        },
        {
          default: {
            args: { x: '2', z: '2', obj: { a: '2', c: '2' } },
            argTypes: { x: '2', z: '2', obj: { a: '2', c: '2' } },
            globals: { x: '2', z: '2', obj: { a: '2', c: '2' } },
            globalTypes: { x: '2', z: '2', obj: { a: '2', c: '2' } },
          },
        },
      ])
    ).toMatchInlineSnapshot(`
      {
        "applyDecorators": undefined,
        "argTypes": {
          "obj": {
            "a": "2",
            "c": "2",
            "name": "obj",
          },
          "x": {
            "0": "2",
            "name": "x",
          },
          "y": {
            "0": "1",
            "name": "y",
          },
          "z": {
            "0": "2",
            "name": "z",
          },
        },
        "argTypesEnhancers": [
          [Function],
          [Function],
        ],
        "args": {
          "obj": {
            "a": "2",
            "c": "2",
          },
          "x": "2",
          "y": "1",
          "z": "2",
        },
        "argsEnhancers": [],
        "beforeEach": [],
        "decorators": [],
        "globalTypes": {
          "obj": {
            "a": "2",
            "c": "2",
            "name": "obj",
          },
          "x": {
            "0": "2",
            "name": "x",
          },
          "y": {
            "0": "1",
            "name": "y",
          },
          "z": {
            "0": "2",
            "name": "z",
          },
        },
        "globals": {
          "obj": {
            "a": "2",
            "c": "2",
          },
          "x": "2",
          "y": "1",
          "z": "2",
        },
        "loaders": [],
        "mount": undefined,
        "parameters": {},
        "render": undefined,
        "renderToCanvas": undefined,
        "renderToDOM": undefined,
        "runStep": [Function],
        "tags": [],
        "testingLibraryRender": undefined,
      }
    `);
  });

  it('overrides object fields by key with mixed named and default exports', () => {
    expect(
      // configs could come from user, addons, presets, frameworks.. so they will likely be mixed in format
      composeConfigs([
        {
          default: {
            args: { x: '1', y: '1', obj: { a: '1', b: '1' } },
            argTypes: { x: '1', y: '1', obj: { a: '1', b: '1' } },
            globals: { x: '1', y: '1', obj: { a: '1', b: '1' } },
            globalTypes: { x: '1', y: '1', obj: { a: '1', b: '1' } },
          },
        },
        {
          args: { x: '2', z: '2', obj: { a: '2', c: '2' } },
          argTypes: { x: '2', z: '2', obj: { a: '2', c: '2' } },
          globals: { x: '2', z: '2', obj: { a: '2', c: '2' } },
        },
        {
          default: {
            globalTypes: { x: '2', z: '2', obj: { a: '2', c: '2' } },
          },
        },
      ])
    ).toMatchInlineSnapshot(`
      {
        "applyDecorators": undefined,
        "argTypes": {
          "obj": {
            "a": "2",
            "c": "2",
            "name": "obj",
          },
          "x": {
            "0": "2",
            "name": "x",
          },
          "y": {
            "0": "1",
            "name": "y",
          },
          "z": {
            "0": "2",
            "name": "z",
          },
        },
        "argTypesEnhancers": [
          [Function],
          [Function],
        ],
        "args": {
          "obj": {
            "a": "2",
            "c": "2",
          },
          "x": "2",
          "y": "1",
          "z": "2",
        },
        "argsEnhancers": [],
        "beforeEach": [],
        "decorators": [],
        "globalTypes": {
          "obj": {
            "a": "2",
            "c": "2",
            "name": "obj",
          },
          "x": {
            "0": "2",
            "name": "x",
          },
          "y": {
            "0": "1",
            "name": "y",
          },
          "z": {
            "0": "2",
            "name": "z",
          },
        },
        "globals": {
          "obj": {
            "a": "2",
            "c": "2",
          },
          "x": "2",
          "y": "1",
          "z": "2",
        },
        "loaders": [],
        "mount": undefined,
        "parameters": {},
        "render": undefined,
        "renderToCanvas": undefined,
        "renderToDOM": undefined,
        "runStep": [Function],
        "tags": [],
        "testingLibraryRender": undefined,
      }
    `);
  });

  it('concats array fields', () => {
    expect(
      composeConfigs([
        {
          argsEnhancers: ['1', '2'],
          argTypesEnhancers: ['1', '2'],
          loaders: ['1', '2'],
        },
        {
          argsEnhancers: ['3', '4'],
          argTypesEnhancers: ['3', '4'],
          loaders: ['3', '4'],
        },
      ])
    ).toMatchInlineSnapshot(`
      {
        "applyDecorators": undefined,
        "argTypes": {},
        "argTypesEnhancers": [
          "1",
          "2",
          "3",
          "4",
          [Function],
          [Function],
        ],
        "args": {},
        "argsEnhancers": [
          "1",
          "2",
          "3",
          "4",
        ],
        "beforeEach": [],
        "decorators": [],
        "globalTypes": {},
        "globals": {},
        "loaders": [
          "1",
          "2",
          "3",
          "4",
        ],
        "mount": undefined,
        "parameters": {},
        "render": undefined,
        "renderToCanvas": undefined,
        "renderToDOM": undefined,
        "runStep": [Function],
        "tags": [],
        "testingLibraryRender": undefined,
      }
    `);
  });

  it('allows single array to be written without array', () => {
    expect(
      composeConfigs([
        {
          argsEnhancers: ['1', '2'],
          argTypesEnhancers: ['1', '2'],
          loaders: '1',
        },
        {
          argsEnhancers: '3',
          argTypesEnhancers: '3',
          loaders: ['2', '3'],
        },
      ])
    ).toMatchInlineSnapshot(`
      {
        "applyDecorators": undefined,
        "argTypes": {},
        "argTypesEnhancers": [
          "1",
          "2",
          "3",
          [Function],
          [Function],
        ],
        "args": {},
        "argsEnhancers": [
          "1",
          "2",
          "3",
        ],
        "beforeEach": [],
        "decorators": [],
        "globalTypes": {},
        "globals": {},
        "loaders": [
          "1",
          "2",
          "3",
        ],
        "mount": undefined,
        "parameters": {},
        "render": undefined,
        "renderToCanvas": undefined,
        "renderToDOM": undefined,
        "runStep": [Function],
        "tags": [],
        "testingLibraryRender": undefined,
      }
    `);
  });

  it('combines decorators in reverse file order', () => {
    expect(
      composeConfigs([
        {
          decorators: ['1', '2'],
        },
        {
          decorators: ['3', '4'],
        },
      ])
    ).toMatchInlineSnapshot(`
      {
        "applyDecorators": undefined,
        "argTypes": {},
        "argTypesEnhancers": [
          [Function],
          [Function],
        ],
        "args": {},
        "argsEnhancers": [],
        "beforeEach": [],
        "decorators": [
          "3",
          "4",
          "1",
          "2",
        ],
        "globalTypes": {},
        "globals": {},
        "loaders": [],
        "mount": undefined,
        "parameters": {},
        "render": undefined,
        "renderToCanvas": undefined,
        "renderToDOM": undefined,
        "runStep": [Function],
        "tags": [],
        "testingLibraryRender": undefined,
      }
    `);
  });

  it('concats argTypesEnhancers in two passes', () => {
    expect(
      composeConfigs([
        { argTypesEnhancers: [{ a: '1' }, { a: '2', secondPass: true }] },
        { argTypesEnhancers: [{ a: '3' }, { a: '4', secondPass: true }] },
      ])
    ).toMatchInlineSnapshot(`
      {
        "applyDecorators": undefined,
        "argTypes": {},
        "argTypesEnhancers": [
          {
            "a": "1",
          },
          {
            "a": "3",
          },
          {
            "a": "2",
            "secondPass": true,
          },
          {
            "a": "4",
            "secondPass": true,
          },
          [Function],
          [Function],
        ],
        "args": {},
        "argsEnhancers": [],
        "beforeEach": [],
        "decorators": [],
        "globalTypes": {},
        "globals": {},
        "loaders": [],
        "mount": undefined,
        "parameters": {},
        "render": undefined,
        "renderToCanvas": undefined,
        "renderToDOM": undefined,
        "runStep": [Function],
        "tags": [],
        "testingLibraryRender": undefined,
      }
    `);
  });

  it('concats chooses scalar fields', () => {
    expect(
      composeConfigs([
        {
          render: 'render-1',
          renderToCanvas: 'renderToCanvas-1',
          applyDecorators: 'applyDecorators-1',
        },
        {
          render: 'render-2',
          renderToCanvas: 'renderToCanvas-2',
          applyDecorators: 'applyDecorators-2',
        },
      ])
    ).toMatchInlineSnapshot(`
      {
        "applyDecorators": "applyDecorators-2",
        "argTypes": {},
        "argTypesEnhancers": [
          [Function],
          [Function],
        ],
        "args": {},
        "argsEnhancers": [],
        "beforeEach": [],
        "decorators": [],
        "globalTypes": {},
        "globals": {},
        "loaders": [],
        "mount": undefined,
        "parameters": {},
        "render": "render-2",
        "renderToCanvas": "renderToCanvas-2",
        "renderToDOM": undefined,
        "runStep": [Function],
        "tags": [],
        "testingLibraryRender": undefined,
      }
    `);
  });

  it('composes step runners', () => {
    const fn = vi.fn();

    const { runStep } = composeConfigs([
      // @ts-expect-error (not defined)
      { runStep: (label, play, context) => fn(`${label}1`, play(context)) },
      // @ts-expect-error (not defined)
      { runStep: (label, play, context) => fn(`${label}2`, play(context)) },
      // @ts-expect-error (not defined)
      { runStep: (label, play, context) => fn(`${label}3`, play(context)) },
    ]);

    // @ts-expect-error We don't care about the context value here
    runStep('Label', () => {}, {});

    expect(fn).toHaveBeenCalledTimes(3);
    expect(fn).toHaveBeenNthCalledWith(1, 'Label3', expect.anything());
    expect(fn).toHaveBeenNthCalledWith(2, 'Label2', expect.anything());
    expect(fn).toHaveBeenNthCalledWith(3, 'Label1', expect.anything());
  });

  describe('FEATURES.legacyDecoratorFileOrder set to true', () => {
    beforeEach(() => {
      global.FEATURES!.legacyDecoratorFileOrder = true;
    });

    afterEach(() => {
      global.FEATURES!.legacyDecoratorFileOrder = false;
    });

    it('should merge decorators in the order they are defined file-wise', () => {
      expect(
        composeConfigs([
          {
            decorators: ['1', '2'],
          },
          {
            decorators: ['3', '4'],
          },
        ])
      ).toMatchObject({
        decorators: ['1', '2', '3', '4'],
      });
    });
  });
});
