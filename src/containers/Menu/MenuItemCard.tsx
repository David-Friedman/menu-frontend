import React, { Component, useEffect } from 'react';

import styled from 'styled-components';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const MenuImage = styled.img`
    margin: 0 auto;
    max-height: 150px;
    max-width: 290px;
`


export const MenuItemCard = (menuItem) => {
    return (
        <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                { menuItem.item.title }
            </Typography>
            <MenuImage src={ menuItem.item.imageURL }/>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                { menuItem.item.description }
            </Typography>
            <Typography variant="body2">
                $ { menuItem.item.price }
            </Typography>
            </CardContent>
        </Card>
    );
}

export default MenuItemCard;
