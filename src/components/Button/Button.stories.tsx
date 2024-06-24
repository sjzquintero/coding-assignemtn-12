
import { StoryFn, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button'; // Importa ButtonProps

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Click me',
  onClick: () => alert('Button clicked!'),
};
