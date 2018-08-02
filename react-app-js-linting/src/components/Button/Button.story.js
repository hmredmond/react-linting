import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import { withKnobs, text } from "@storybook/addon-knobs";


storiesOf("Buttons", module)
  .addDecorator(withKnobs)

  // Button
  .add("Button - primary", () => (

    <Button
    label={text("Text", "Hello Button")}
    >       
      </Button>

  ))
