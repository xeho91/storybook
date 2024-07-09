```ts filename="YourPage.component.ts" renderer="angular" language="ts"
import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'document-screen',
  template: `
    <div *ngIf="loading">Loading...</div>
    <div *ngIf="error">There was an error fetching the data!</div>
    <div *ngIf="!loading && subdocuments.length > 0">
      <page-layout [user]="user">
        <document-header [document]="document"></document-header>
        <document-list [documents]="subdocuments"></document-list>
      </page-layout>
    </div>
  `,
})
export class SampleGraphqlComponent implements OnInit {
  user: any = { id: 0, name: 'Some User' };

  document: any = { id: 0, title: 'Some Title' };

  subdocuments: any = [];

  error = '';
  loading = true;

  constructor(private apollo: Apollo) {}
  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
          query AllInfoQuery {
            user {
              userID
              name
            }
            document {
              id
              userID
              title
              brief
              status
            }
            subdocuments {
              id
              userID
              title
              content
              status
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.user = result?.data?.user;
        this.document = result?.data?.document;
        this.subdocuments = result?.data?.subdocuments;
        this.loading = result.loading;

        // Errors is an array and we're getting the first item only
        this.error = result.errors[0].message;
      });
  }
}
```
```js filename="YourPage.js|jsx|ts|tsx" renderer="react" language="js"
import React from 'react';

import { useQuery, gql } from '@apollo/client';

import { PageLayout } from './PageLayout';
import { DocumentHeader } from './DocumentHeader';
import { DocumentList } from './DocumentList';

const AllInfoQuery = gql`
  query AllInfo {
    user {
      userID
      name
    }
    document {
      id
      userID
      title
      brief
      status
    }
    subdocuments {
      id
      userID
      title
      content
      status
    }
  }
`;

function useFetchInfo() {
  const { loading, error, data } = useQuery(AllInfoQuery);

  return { loading, error, data };
}

export function DocumentScreen() {
  const { loading, error, data } = useFetchInfo();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an error fetching the data!</p>;
  }

  return (
    <PageLayout user={data.user}>
      <DocumentHeader document={data.document} />
      <DocumentList documents={data.subdocuments} />
    </PageLayout>
  );
}
```
```html filename="YourPage.vue" renderer="vue" language="js" tabTitle="3"
<template>
  <div v-if="loading">Loading...</div>

  <div v-else-if="error">There was an error fetching the data!</div>

  <div v-if="!loading && data && result.subdocuments.length">
    <PageLayout :user="data.user">
      <DocumentHeader :document="result.document" />
      <DocumentList :documents="result.subdocuments" />
    </PageLayout>
  </div>
</template>

<script>
  import PageLayout from './PageLayout';
  import DocumentHeader from './DocumentHeader';
  import DocumentList from './DocumentList';

  import gql from 'graphql-tag';
  import { useQuery } from '@vue/apollo-composable';

  export default {
    name: 'DocumentScreen',
    setup() {
      const { result, loading, error } = useQuery(gql`
        query AllInfoQuery {
          user {
            userID
            name
          }
          document {
            id
            userID
            title
            brief
            status
          }
          subdocuments {
            id
            userID
            title
            content
            status
          }
        }
      `);
      return {
        result,
        loading,
        error,
      };
    },
  };
</script>
```
```html filename="YourPage.svelte" renderer="svelte" language="js"
<script>
  import gql from 'graphql-tag';
  import { query } from 'svelte-apollo';
  import PageLayout from './PageLayout.svelte';
  import DocumentHeader from './DocumentHeader.svelte';
  import DocumentList from './DocumentList.svelte';

  const AllInfoQuery = gql`
    query AllInfoQuery {
      user {
        userID
        name
      }
      document {
        id
        userID
        title
        brief
        status
      }
      subdocuments {
        id
        userID
        title
        content
        status
      }
    }
  `;
  const infoResult = query(AllInfoQuery);
</script>

{#if $infoResult.loading} 
  <p>Loading...</p>
{:else if $infoResult.error} 
  <p>There was an error fetching the data!</p> 
{:else}
  <PageLayout {$infoResult.data.user}>
    <DocumentHeader {$infoResult.data.document} />
    <DocumentList {$infoResult.data.subdocuments} />
  </PageLayout>
{/if}
```
