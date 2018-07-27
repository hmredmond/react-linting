import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button label="Hello World"/>
  ))
  .add('with some emoji', () => (
    <Button label="😀 😎 👍 💯"/>
  ));