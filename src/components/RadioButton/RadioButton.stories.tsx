import { Meta, StoryFn } from '@storybook/react';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as Meta<typeof RadioButton>;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Radio Button',
  name: 'example',
};
