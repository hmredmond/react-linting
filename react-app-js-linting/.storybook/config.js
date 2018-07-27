// Import from @storybook/X where X is your framework
import { configure, addDecorator } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';

addDecorator(withNotes);

const req = require.context('../src/components', true, /story\.js$/)

configure(() => {
  req.keys().forEach(filename => {
    req(filename)
  });
}, module);