import MyPageCardLayout from '@components/base/my-page-card'
import {Meta, StoryObj} from '@storybook/react'

const meta: Meta<typeof MyPageCardLayout> = {
  component: MyPageCardLayout,
  title: 'mypage/MypageCardLayout',
}

export default meta
type Story = StoryObj<typeof MyPageCardLayout>

export const DefaultCardLayout: Story = {
}
