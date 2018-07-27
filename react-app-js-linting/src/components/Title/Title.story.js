import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Title } from './Title';

storiesOf('Title', module)
  .add('with text', () => (
    <Title value="Hello World"/>
  ))
  .add('with some emoji', () => (
    <Title value="😀 😎 👍 💯"/>
  ));