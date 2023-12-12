import React, { useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material';

import BackgroundImages from "../assets/images/background-auth.png";
import Login from '../components/Login';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box >
                   {children}
                </Box>
            )}
        </div>
    );
}



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Auth = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ overflowY: "hidden", display: "flex", columnGap: "300px" }}>
            <img src={BackgroundImages} alt="" />
            <Box>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 20 }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Войти" {...a11yProps(0)} />
                        <Tab label="Регистрация" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Login/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                   Регистрация
                </CustomTabPanel>
            </Box>
        </Box>
    )
}

export default Auth