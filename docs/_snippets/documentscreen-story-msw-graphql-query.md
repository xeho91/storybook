```ts filename="YourPage.stories.ts" renderer="angular" language="ts" tabTitle="story"
import { Meta, Story } from '@storybook/angular'; 

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { graphql } from 'msw';

import { DocumentScreen } from './YourPage.component';
import { DocumentList } from './DocumentList.component';
import { DocumentHeader } from './DocumentHeader.component';
import { PageLayout } from './PageLayout.component';

import { MockGraphQLModule } from './mock-graphql.module';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'DocumentScreen',
  component: DocumentScreen,
  decorators: [
    moduleMetadata({
      declarations: [DocumentList, DocumentHeader, PageLayout],
      imports: [CommonModule, HttpClientModule, MockGraphQLModule],
    }),
  ],
} as Meta;

//👇The mocked data that will be used in the story
const TestData = {
  user: {
    userID: 1,
    name: 'Someone',
  },
  document: {
    id: 1,
    userID: 1,
    title: 'Something',
    brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    status: 'approved',
  },
  subdocuments: [
    {
      id: 1,
      userID: 1,
      title: 'Something',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
    {
      id: 2,
      userID: 1,
      title: 'Something else',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'awaiting review',
    },
    {
      id: 3,
      userID: 2,
      title: 'Another document',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
    {
      id: 4,
      userID: 2,
      title: 'Something',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
  ],
};

const PageTemplate: Story = () => ({
  props: {},
});

export const MockedSuccess = PageTemplate.bind({});
MockedSuccess.parameters = {
  msw: [
    graphql.query('AllInfoQuery', (req, res, ctx) => {
      return res(ctx.data(TestData));
    }),
  ],
};

export const MockedError = PageTemplate.bind({});
MockedError.parameters = {
  msw: [
    graphql.query('AllInfoQuery', (req, res, ctx) => {
      return res(
        ctx.delay(800),
        ctx.errors([
          {
            message: 'Access denied',
          },
        ])
      );
    }),
  ],
};
```
```ts filename="mock-graphql.module.ts" renderer="angular" language="ts" tabTitle="mock-apollo-module"
import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

// See here for docs https://apollo-angular.com/docs/get-started

const uri = 'https://your-graphql-endpoint';
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    },
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class MockGraphQLModule {}
```
```js filename="YourPage.stories.js|jsx|ts|tsx" renderer="react" language="js"
import React from 'react';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { graphql } from 'msw';

import { DocumentScreen } from './YourPage';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'DocumentScreen',
  component: DocumentScreen,
};

const mockedClient = new ApolloClient({
  uri: 'https://your-graphql-endpoint',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

//👇The mocked data that will be used in the story
const TestData = {
  user: {
    userID: 1,
    name: 'Someone',
  },
  document: {
    id: 1,
    userID: 1,
    title: 'Something',
    brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    status: 'approved',
  },
  subdocuments: [
    {
      id: 1,
      userID: 1,
      title: 'Something',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
    {
      id: 2,
      userID: 1,
      title: 'Something else',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'awaiting review',
    },
    {
      id: 3,
      userID: 2,
      title: 'Another document',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
    {
      id: 4,
      userID: 2,
      title: 'Something',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
  ],
};

const PageTemplate = () => (
  <ApolloProvider client={mockedClient}>
    <DocumentScreen />
  </ApolloProvider>
);

export const MockedSuccess = PageTemplate.bind({});
MockedSuccess.parameters = {
  msw: [
    graphql.query('AllInfoQuery', (req, res, ctx) => {
      return res(ctx.data(TestData));
    }),
  ],
};

export const MockedError = PageTemplate.bind({});
MockedError.parameters = {
  msw: [
    graphql.query('AllInfoQuery', (req, res, ctx) => {
      return res(
        ctx.delay(800),
        ctx.errors([
          {
            message: 'Access denied',
          },
        ])
      );
    }),
  ],
};
```
```js filename="YourPage.stories.js" renderer="svelte" language="js" tabTitle="story"
import { graphql } from 'msw';

import DocumentScreen from './YourPage.svelte';
import MockApolloWrapperClient from './MockApolloWrapperClient.svelte';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'DocumentScreen',
  component: DocumentScreen,
  decorators: [() => MockGraphqlProvider],
};

//👇The mocked data that will be used in the story
const TestData = {
  user: {
    userID: 1,
    name: 'Someone',
  },
  document: {
    id: 1,
    userID: 1,
    title: 'Something',
    brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    status: 'approved',
  },
  subdocuments: [
    {
      id: 1,
      userID: 1,
      title: 'Something',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
    {
      id: 2,
      userID: 1,
      title: 'Something else',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'awaiting review',
    },
    {
      id: 3,
      userID: 2,
      title: 'Another document',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
    {
      id: 4,
      userID: 2,
      title: 'Something',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
  ],
};

const PageTemplate = () => ({
  Component: DocumentScreen,
});

export const MockedSuccess = PageTemplate.bind({});
MockedSuccess.parameters = {
  msw: [
    graphql.query('AllInfoQuery', (req, res, ctx) => {
      return res(ctx.data(TestData));
    }),
  ],
};
export const MockedError = PageTemplate.bind({});
MockedError.parameters = {
  msw: [
    graphql.query('AllInfoQuery', (req, res, ctx) => {
      return res(
        ctx.delay(800),
        ctx.errors([
          {
            message: 'Access denied',
          },
        ])
      );
    }),
  ],
};
```
```html filename="MockApolloWrapperClient.svelte" renderer="svelte" language="js" tabTitle="with-mock-implementation"
<script>
  import { ApolloClient, InMemoryCache } from '@apollo/client';

  import { setClient } from 'svelte-apollo';

  const mockedClient = new ApolloClient({
    uri: 'https://your-graphql-endpoint',
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    },
  });
  setClient(mockedClient);
</script>

<div>
  <slot />
</div>
```
```js filename="YourPage.stories.js" renderer="vue" language="js" tabTitle="vue 3 story"
import DocumentScreen from './YourPage.vue';

import WrapperComponent from './ApolloWrapperClient.vue';

import { graphql } from 'msw';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/6/configure#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'DocumentScreen',
  component: DocumentScreen,
};

//👇The mocked data that will be used in the story
const TestData = {
  user: {
    userID: 1,
    name: 'Someone',
  },
  document: {
    id: 1,
    userID: 1,
    title: 'Something',
    brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    status: 'approved',
  },
  subdocuments: [
    {
      id: 1,
      userID: 1,
      title: 'Something',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
    {
      id: 2,
      userID: 1,
      title: 'Something else',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'awaiting review',
    },
    {
      id: 3,
      userID: 2,
      title: 'Another document',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
    {
      id: 4,
      userID: 2,
      title: 'Something',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
  ],
};

const PageTemplate = () => ({
  components: { DocumentScreen, WrapperComponent },
  template: `
    <WrapperComponent>
      <SampleGraphqlComponent />
    </WrapperComponent>
  `,
});

export const MockedSuccess = PageTemplate.bind({});
MockedSuccess.parameters = {
  msw: [
    graphql.query('AllInfoQuery', (req, res, ctx) => {
      return res(ctx.data(TestData));
    }),
  ],
};

export const MockedError = PageTemplate.bind({});
MockedError.parameters = {
  msw: [
    graphql.query('AllInfoQuery', (req, res, ctx) => {
      return res(
        ctx.delay(800),
        ctx.errors([
          {
            message: 'Access denied',
          },
        ])
      );
    }),
  ],
};
```
```html filename="MockApolloWrapperClient.vue" renderer="vue" language="js" tabTitle="vue-3-mock-implementation"
<template>
  <div><slot /></div>
</template>

<script>
  import { defineComponent, provide } from 'vue';
  import { DefaultApolloClient } from '@vue/apollo-composable';
  import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

  // Apollo client wrapper component that can be used within your app and Storybook
  export default defineComponent({
    name: 'WrapperComponent',
    setup() {
      const httpLink = createHttpLink({
        // You should use an absolute URL here
        uri: 'https://your-graphql-endpoint',
      });
      const cache = new InMemoryCache();

      const mockedClient = new ApolloClient({
        link: httpLink,
        cache,
        defaultOptions: {
          watchQuery: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
          },
          query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
          },
        },
      });
      provide(DefaultApolloClient, mockedClient);
    },
  });
</script>
```
