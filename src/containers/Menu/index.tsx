import React from 'react';
import styled from 'styled-components';

import MenuItemCard from './MenuItemCard'

const MenuWrapper = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    padding-top: 20px;
    align-content: center;
    flex-wrap: wrap;
`;

export interface MenuItem {
    title: string;
    imageURL: string;
    description: string;
    price: number;
}

const menuItemList: Array<MenuItem> = [
    {
        title: "Item 1",
        imageURL: '/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg',
        description: "This is Menu Item 1",
        price: 2.00,
    },
    {
        title: "Item 2",
        imageURL: '/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg',
        description: "This is Menu Item 2",
        price: 2.21,
    },
    {
        title: "Item 3",
        imageURL: '/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg',
        description: "Don't buy this one",
        price: 2.21,
    },
    {
        title: "Item 4",
        imageURL: '/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg',
        description: "This is Menu Item 4",
        price: 2.21,
    },
    {
        title: "Item 5",
        imageURL: '/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg',
        description: "This is EXPENSIVE Menu Item 5",
        price: 5.96,
    },
    {
        title: "Item 6",
        imageURL: '/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg',
        description: "This is Menu Item 6",
        price: 2.21,
    },
];

export const Menu = () => {
    return (
        <MenuWrapper>
            { menuItemList.map((menuItem) => <MenuItemCard item={menuItem} />) }
        </MenuWrapper>
    );
}

export default Menu;
