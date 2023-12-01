import {Button as MuiButton, useTheme} from '@mui/material'

export interface ButtonProps {
  title: string
  color: any
  variant: 'contained' | 'outlined' | 'text'
}

const Button: React.FC<ButtonProps> = ({title, color, variant}) => {
  const theme = useTheme()
  console.log(`${theme.palette.primary[`${color}`]}`)
  return (
    <MuiButton
      variant="contained"
      sx={{
        backgroundColor: `${theme.palette.primary[`${color}`]}`,
      }}
    >
      {title}
    </MuiButton>
  )
}
export default Button
