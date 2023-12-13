import React from 'react';
import { IconButton, Card, CardActions, CardMedia, CardContent, Typography, Box } from '@mui/material';


import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import CardDefaultImg from "../assets/images/card-default-img.png";


export default function ProductCard() {
    return (
        <Card sx={{ maxWidth: 154, height: "184px", padding: "6px", borderRadius: "12px" }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="85"
                image={CardDefaultImg}
            />
            <CardContent sx={{ padding: "0px" }}>
                <Typography variant="h5" component="p" sx={{ fontSize: "14px", lineHeight: "120%", fontWeight: "bold", marginTop: '4px' }}>
                    BMW M4 Coupe: A Two-Doorx
                </Typography>
                <Typography variant="h5" component="p" sx={{ fontSize: "14px", lineHeight: "120%", color: "#5D5FEF", fontWeight: 'bold', marginTop: '4px' }}>
                    23 000 $
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "space-between", padding: "0px", marginTop: '4px' }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton aria-label="favorite" size="small" sx={{ padding: "0px" }}>
                        <FavoriteIcon />
                    </IconButton>
                    <Typography variant="body2" component="p" sx={{ color: 'grey' }}>
                        100
                    </Typography>
                </Box>
                <IconButton aria-label="more" size="small" sx={{ padding: "0px", }}>
                    <MoreVertIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}