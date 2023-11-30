import type {Meta, StoryObj} from '@storybook/react'
import Button from './button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
}

export default meta
type Story = StoryObj<typeof Button>
export const Primary: Story = {
  args: {
    title: 'Primary',
    variant: 'contained',
    color: 'primary',
  },
}

export const Secondary = {
  args: {
    title: 'Secondary',
    variant: 'contained',
    color: 'secondary',
  },
}

export const Outlined = {
  args: {
    title: 'Outlined',
    variant: 'outlined',
    color: 'primary',
  },
}

export const Text = {
  args: {
    title: 'Text',
    variant: 'text',
    color: 'primary',
  },
}
