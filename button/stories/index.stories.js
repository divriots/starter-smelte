import '~/smelte/src/smelte.css';

import { Button } from '../';

export const storyDefault = () => Button;

export const storyDisabled = () => ({
  Component: Button,
  props: {
    disabled: true,
  },
});

export const storyDark = () => ({
  Component: Button,
  props: {
    dark: true,
  },
});
