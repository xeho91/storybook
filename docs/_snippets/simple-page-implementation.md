```ts filename="YourPage.component.ts" renderer="angular" language="ts"
import { Component, Input } from '@angular/core';

@Component({
  selector: 'document-screen',
  template: `
    <page-layout [user]="user">
      <document-header [document]="document"></document-header>
      <document-list [documents]="subdocuments"></document-list>
    </page-layout>
  `,
})
export class DocumentScreen {
  @Input()
  user: any = { id: 0, name: 'Some User' };

  @Input()
  document: any = { id: 0, title: 'Some Title' };

  @Input()
  subdocuments: any = [];
}
```
```js filename="YourPage.js|jsx" renderer="react" language="js"
import React from 'react';

import { PageLayout } from './PageLayout';
import { DocumentHeader } from './DocumentHeader';
import { DocumentList } from './DocumentList';

export function DocumentScreen({ user, document, subdocuments }) {
  return (
    <PageLayout user={user}>
      <DocumentHeader document={document} />
      <DocumentList documents={subdocuments} />
    </PageLayout>
  );
}
```
```js filename="YourPage.ts|tsx" renderer="react" language="ts"
import React from 'react';

import PageLayout from './PageLayout';
import Document from './Document';
import SubDocuments from './SubDocuments';
import DocumentHeader from './DocumentHeader';
import DocumentList from './DocumentList';

export interface DocumentScreen {
  user?: {};
  document?: Document;
  subdocuments?: SubDocuments[];
}

function DocumentScreen({ user, document, subdocuments }) {
  return (
    <PageLayout user={user}>
      <DocumentHeader document={document} />
      <DocumentList documents={subdocuments} />
    </PageLayout>
  );
}
```
```html filename="YourPage.svelte" renderer="svelte" language="js"
<script>
  import PageLayout from './PageLayout.svelte';
  import DocumentHeader from './DocumentHeader.svelte';
  import DocumentList from './DocumentList.svelte';

  export let user = {};
  export let document = {};
  export let subdocuments = [];
</script>

<div>
  <PageLayout {user}>
    <DocumentHeader {document} />
    <DocumentList documents={subdocuments} />
  </PageLayout>
</div>
```
```html filename="YourPage.vue" renderer="vue" language="js" tabTitle="2"
<template>
  <PageLayout :user="user">
    <DocumentHeader :document="document" />
    <DocumentList :documents="subdocuments" />
  </PageLayout>
</template>

<script>
  import PageLayout from './PageLayout';
  import DocumentHeader from './DocumentHeader';
  import DocumentList from './DocumentList';
  
  export default {
    name: 'DocumentScreen',
    components: { PageLayout, DocumentHeader, DocumentList },
    props: {
      user: {
        type: String,
        default: 'N/A',
      },
      document: {
        type: Object,
        default: () => ({
          id: 1,
          title: 'A document',
          content: 'Lorem Ipsum',
        }),
      },
      subdocuments: {
        type: Array,
        default: () => [],
      },
    },
  };
</script>
```
```html filename="YourPage.vue" renderer="vue" language="js" tabTitle="3"
<template>
  <PageLayout :user="user">
    <DocumentHeader :document="document" />
    <DocumentList :documents="subdocuments" />
  </PageLayout>
</template>

<script>
  import PageLayout from './PageLayout';
  import DocumentHeader from './DocumentHeader';
  import DocumentList from './DocumentList';
  import { reactive } from 'vue';
  
  export default {
    name: 'DocumentScreen',
    components: { PageLayout, DocumentHeader, DocumentList },
    props: {
      user: {
        type: String,
        default: 'N/A',
      },
      document: {
        type: Object,
        default: () => ({
          id: 1,
          title: 'A document',
          content: 'Lorem Ipsum',
        }),
      },
      subdocuments: {
        type: Array,
        default: () => [],
      },
    },
    setup(props) {
      props = reactive(props);
      return {
        /**
         * What will be returned here will available to the component
         * Functions referenced here will act like methods
         */
      };
    },
  };
</script>
```
