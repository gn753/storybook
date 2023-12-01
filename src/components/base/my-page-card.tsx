import {Divider, Typography, styled} from '@mui/material'
import MyPageButton from './my-page-button'

const MyPageCardLayout = () => {
  return (
    <CardContainer>
      <CardTitle>제목</CardTitle>
      <Divider />
      <MyCardContent>컨텐츠</MyCardContent>
      <Divider />
      <MyPageButton text="버튼" onClick={() => {}} />
    </CardContainer>
  )
}

export default MyPageCardLayout

const CardContainer = styled('div')`
  flex: 1;
  max-width: 512px;
  border-radius: 15px;
  border: solid 1px #dbdbdb;
  padding: 24px 24px 0 24px;
  height: 380px;
  display: flex;
  flex-direction: column;
`

const CardTitle = styled(Typography)`
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #707070;
  margin-bottom: 24px;
`

const MyCardContent = styled('div')`
  height: 219px;
  margin: 0 26px 0 28px;
  display: flex;
  flex-direction: column;
`
