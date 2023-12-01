import PageNumber from '@components/base/page-number'
import {Meta, StoryObj} from '@storybook/react'

const meta: Meta<typeof PageNumber> = {
  component: PageNumber,
  title: 'mypage/PageNumber',
}

export default meta
type Story = StoryObj<typeof PageNumber>

export const Active: Story = {
  args: {
    active: true,
  },
}

export const Inactive: Story = {
  args: {
    active: false,
  },
}
