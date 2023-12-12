import React from 'react'
import { Box, TextField, Button } from '@mui/material'

const Login = () => {
  return (
    <Box sx={{display:"flex", flexDirection:"column", rowGap:"20px", mt:5,  }}>
        <TextField id="nickname" label="Имя пользователя" variant="standard" />
        <TextField id="password" label="Пароль" variant="standard" />
        <Button variant="contained" sx={{borderRadius:"50px"}}>Войти</Button>
    </Box>
  )
}

export default Login