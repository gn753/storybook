import {Button as MuiButton, useTheme} from '@mui/material'

export interface ButtonProps {
  title: string
  color: string
  variant: 'contained' | 'outlined' | 'text'
}

const Button: React.FC<ButtonProps> = ({title, color, variant}) => {
  const theme = useTheme()

  return (
    <MuiButton
      variant="contained"
      sx={{
        backgroundColor: theme => theme.palette.action.activatedOpacity,
      }}
    >
      {title}
    </MuiButton>
  )
}
export default Button
