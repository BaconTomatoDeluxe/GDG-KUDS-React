import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';
import { useState } from 'react';
import { ConfigProvider } from '../ConfigProvider';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    name: { control: false },
  },
  render: function Render(args) {
    const [checked, setChecked] = useState(false);

    return (
      <ConfigProvider>
        <Checkbox {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
      </ConfigProvider>
    );
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const checkbox: Story = {
  args: {
    name: 'checkbox',
    colorType: 'yellow',
    disabled: false,
    children: '',
  },
};
