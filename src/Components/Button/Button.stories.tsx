import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import Button from './Button';
import Text from '../Text/Text';
import { View } from 'react-native';
import { buttonWithTextNotes } from './notes/button-with-text';
import { buttonWithEmojiNotes } from './notes/button-with-emoji';
import { buttonLoadingNotes } from './notes/button-loading';

storiesOf('Button', module)
  .addDecorator((getStory) => <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }}>{getStory()}</View>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </Button>
  ), {
    notes: buttonWithTextNotes,
  })
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ), {
    notes: buttonWithEmojiNotes,
  })
  .add('loading', () => (
    <Button onPress={action('loading')} loading>
      <Text>Test</Text>
    </Button>
  ), {
    notes: buttonLoadingNotes,
  });
