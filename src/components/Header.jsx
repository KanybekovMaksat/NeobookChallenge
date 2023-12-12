import React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button, Menu, MenuItem, IconButton, Toolbar, Box, AppBar } from '@mui/material';

import LogoImg from "../assets/images/logo.png";

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: "white", boxShadow: "none" }} >
                <Toolbar>
                    <Box component="div" sx={{ flexGrow: 1 }}>
                        <img src={LogoImg} alt="MOBI MARKET" />
                    </Box>
                    <Box>
                        <Button variant="contained" sx={{ borderRadius: "50px", textTransform: "none" }}>
                            Подать обьявление
                        </Button>
                        <IconButton

                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                        >
                            <AccountCircle sx={{ fontSize: "35px" }} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Профиль</MenuItem>
                            <MenuItem onClick={handleClose}>Выйти</MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}