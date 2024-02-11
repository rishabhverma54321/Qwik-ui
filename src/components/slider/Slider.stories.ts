import type { Meta, StoryObj } from '@storybook/react';

import  Slider  from './Slider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta:any = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args:{
    options:["1month","2month","3month"],
    onChange:()=>{},
  }
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    options:["1month","2month","3month"],
    onChange:()=>{},
  },
};
