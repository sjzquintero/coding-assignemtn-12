
import { StoryFn, Meta } from '@storybook/react';

import Dropdown, { DropdownProps } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  onChange: (value: string) => {
    console.log('Selected:', value);
  },
};
