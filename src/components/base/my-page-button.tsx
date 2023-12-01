import {Button, styled} from '@mui/material'
import {ReactNode} from 'react'
import {CustomThemeOptions} from '../../theme/index.interface'
interface proptype {
  icon?: ReactNode
  text: string
  onClick: () => void
}

interface styleProptype {
  theme?: CustomThemeOptions
}

const MyPageButton = ({icon, text, onClick}: proptype) => {
  return (
    <ButtonContainer>
      <MyButton variant="outlined" onClick={onClick}>
        {icon !== undefined ? icon : ''}
        {text}
      </MyButton>
    </ButtonContainer>
  )
}

export default MyPageButton

const ButtonContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
 
  height: 100%;
  max-height: 84px;
`

const MyButton = styled(Button)`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500; 
  max-width: 340px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.32px;
  text-align: left;
  color: ${({theme}: styleProptype) => theme?.palette.grey[800]};
  border-color: ${({theme}: styleProptype) => theme?.palette.grey[300]};
  width: 80%;
  height: 55%;
  border-radius: 10px;
  &:hover {
    border-color: ${({theme}: styleProptype) => theme?.palette.grey[300]};
    background-color: ${({theme}: styleProptype) => theme?.palette.grey[200]};
  }
`
