import Button from '@components/base/button'
import type {Meta, StoryObj} from '@storybook/react'

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
    color: 'main',
  },
}

export const Secondary = {
  args: {
    title: 'Secondary',
    variant: 'contained',
    color: 'dark',
  },
}

export const Outlined = {
  args: {
    title: 'Outlined',
    variant: 'outlined',
    color: '100',
  },
}

export const Text = {
  args: {
    title: 'Text',
    variant: 'text',
    color: 'light',
  },
}
