import { Meta, StoryFn } from '@storybook/react';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
} as Meta<typeof HeroImage>;

const Template: StoryFn<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Welcome to Our Site',
  description: 'We are glad to have you here.',
  imageUrl: 'https://www.duplichecker.com/blog/wp-content/uploads/2018/11/dp-img3.jpg',
};
