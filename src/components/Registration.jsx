import React from 'react';
import { TextField, Box, Button, Typography } from '@mui/material';

const steps = [
    {
        label: 'Личные данные',
        fields: [
            { label: 'Имя пользователя', name: 'username' },
            { label: 'Почта', name: 'email' },
        ],
    },
    {
        label: 'Придумайте пароль',
        description: "Минимальная длина — 8 символов. Для надежности пароль должен содержать буквы и цифры.",
        fields: [
            { label: 'Пароль', name: 'password', type: 'password' },
            { label: 'Повторите пароль', name: 'confirmPassword', type: 'password' },
        ],
    },
];

export default function Registration() {
    const [activeStep, setActiveStep] = React.useState(0);

    const totalSteps = () => {
        return steps.length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const handleNext = () => {
        const newActiveStep = activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <Box sx={{ width: '100%' }}>
            <Typography sx={{ mt: 2, textAlign: "center" }}>
                {steps[activeStep].label}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                {steps[activeStep].fields.map((field, index) => (
                    <TextField
                        sx={{ mt: 3 }}
                        key={index}
                        label={field.label}
                        variant='standard'
                        type={field.type || 'text'}
                    />
                ))}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant='contained'
                    sx={{ mr: 1, borderRadius: "50px" }}
                >
                    {"<---"}
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                {
                    isLastStep() ?
                        <Button sx={{ borderRadius: "50px" }} variant='contained' >
                            Зарегистрироваться
                        </Button>
                        :
                        <Button variant='contained' onClick={handleNext} sx={{ mr: 1, borderRadius: "50px" }}>
                            {"--->"}
                        </Button>
                }
            </Box>
            <Typography sx={{ fontSize: "12px", maxWidth: "350px", margin: "20px auto", textAlign: "center" }}>
                {steps[activeStep].description || ""}
            </Typography>
        </Box>
    );
}