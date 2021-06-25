import App from '../src/App.svelte';

export const storyUnnamed = () => App;

export const storyNamed = () => ({
  Component: App,
  props: {
    name: 'John Doe',
  },
});
