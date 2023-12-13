import React from 'react'
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Typography
} from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const SideBar = () => {
    return (
        <Box flex={1} sx={{ display: { xs: 'none', sm: 'block', } }}>
            <Box position={'fixed'} sx={{ height: "100vh", boxShadow: '0px 0px 8px grey' }} >
                <List >
                    <ListItem >
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 40, height: 40 }}
                        />
                        <Box sx={{ display: 'flex', flexDirection: "column", ml: 2, }}>
                            <Typography>
                                Алесястар
                            </Typography>
                            <Typography>
                                sergeykrash01
                            </Typography>
                        </Box>
                    </ListItem>
                    <ListItem disablePadding sx={{ mt: 2, width: "350px" }}>
                        <ListItemButton component="a" href="#pages">
                            <ListItemIcon>
                                <FavoriteIcon />
                            </ListItemIcon>
                            <ListItemText primary="Понравившиеся" />
                            <ListItemIcon sx={{ display: "flex", justifyContent: "end" }}>
                                <ChevronRightIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#pages">
                            <ListItemIcon>
                                <StorefrontIcon />
                            </ListItemIcon>
                            <ListItemText primary="Мои товары" />
                            <ListItemIcon sx={{ display: "flex", justifyContent: "end" }}>
                                <ChevronRightIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ mt: 4 }}>
                        <ListItemButton component="a" >
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Выйти" />
                            <ListItemIcon sx={{ display: "flex", justifyContent: "end" }}>
                                <ChevronRightIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default SideBar