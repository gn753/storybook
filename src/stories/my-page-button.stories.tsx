import MyPageButton from '@components/base/my-page-button'
import {Meta, StoryObj} from '@storybook/react'
import {CreateOutlined} from '@mui/icons-material'

const meta: Meta<typeof MyPageButton> = {
  component: MyPageButton,
  title: 'mypage/MypageCardLayout/MypageButton',
}

export default meta
type Story = StoryObj<typeof MyPageButton>

export const WithIcon: Story = {
  args: {
    icon: (
      <CreateOutlined
        sx={{
          marginRight: '10px',
        }}
      />
    ),
    text: '안녕하세요',
  },
}

export const OnlyText: Story = {
    args: {
      text: '안녕하세요',
    },
  }
  