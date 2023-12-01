import FeedChip from '@components/base/feed-chip'
import {Meta, StoryObj} from '@storybook/react'

const meta: Meta<typeof FeedChip> = {
  component: FeedChip,
  title: 'mypage/FeedChip',
}

export default meta
type Story = StoryObj<typeof FeedChip>

export const Active: Story = {
  args: {
    active: true,
    label: '선택',
  },
}
  
export const Inactive: Story = {
  args: {
    active: false,
    label: '선택안함',
  },
}

export const ClickUnable: Story = {
  args: {
    active: false,
    label: '클릭불가',
    clickable: false,
  },
}