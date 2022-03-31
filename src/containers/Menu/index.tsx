import { Fab, Modal, Box, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
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

const fabStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16,
};

const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '10%',
    transform: 'translate(-5%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const textFieldStyle = {
    width: '100%',
    paddingBottom: '10px',
}

export type MenuItem = {
    title: string;
    imageURL: string;
    description: string;
    price: number;
}

export class Menu extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            menuItemList: [
                {
                    title: "Weezer",
                    imageURL: 'https://m.media-amazon.com/images/I/71nYpz++VCL._SL1400_.jpg',
                    description: "For when you're feeling blue...",
                    price: 19.94,
                },
                {
                    title: "Pinkerton",
                    imageURL: 'https://upload.wikimedia.org/wikipedia/en/c/ca/Pinkerton_cover.jpg',
                    description: "Pinker-ton of fun!",
                    price: 2.22,
                },
                {
                    title: "Velvet Underground & Nico",
                    imageURL: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-108784-e569415749457a65514cfe8b509d7ead8b7b4013.jpg?w=500',
                    description: "It only sold 10,000 copies...",
                    price: 10000,
                },
                {
                    title: "Abbey Road",
                    imageURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Beatles_-_Abbey_Road.jpg/220px-Beatles_-_Abbey_Road.jpg',
                    description: "You're gonna carry that weight.",
                    price: 0.69,
                },
                {
                    title: "Katamari Damacy",
                    imageURL: 'https://m.media-amazon.com/images/I/5151rKuRBLL.jpg',
                    description: "Naaaaaa na na na na na na na!",
                    price: 5.96,
                },
                {
                    title: "The Stranger",
                    imageURL: 'https://m.media-amazon.com/images/I/71CiqmGN7sL._AC_SL1500_.jpg',
                    description: "Don't be a stranger to this album.",
                    price: 123021.41,
                },
            ],
            isOpen: false,
            currentInput: {
                title: '',
                imageURL: '',
                description: '',
                price: '',
            }
        }
    }

    openModal = () => {
        this.setState(() => ({
            isOpen: true,
        }));
    };

    closeModal = () => {
        this.setState(() => ({
            isOpen: false,
        }));
    };

    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState((state) => ({
            currentInput: {
                ...(state.currentInput),
                [name]: value,
            }
        }));
    };

    submitInput = () => {
        this.setState((state) => ({
            menuItemList: [
                ...(state.menuItemList),
                state.currentInput,
            ],
            currentInput: {
                title: '',
                imageURL: '',
                description: '',
                price: '',
            }
        }));
        this.closeModal();
    }

    render() {
        const { menuItemList, isOpen, currentInput } = this.state;

        return (
            <>
            <MenuWrapper>
                {menuItemList.map((menuItem) => <MenuItemCard key={menuItem.title} item={menuItem} />)}
            </MenuWrapper>
            <Fab sx={fabStyle} color='primary' onClick={this.openModal}>
                <AddIcon />
            </Fab>
            <Modal
                open={isOpen}
                onClose={this.closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <TextField id="outlined-basic" label="Image URL" variant="outlined" sx={textFieldStyle} name='imageURL' onChange={this.handleInput}/>
                    <TextField id="outlined-basic" label="Title" variant="outlined" sx={textFieldStyle} name='title' onChange={this.handleInput}/>
                    <TextField id="outlined-basic" label="Description" variant="outlined" sx={textFieldStyle} name='description' onChange={this.handleInput}/>
                    <TextField id="outlined-basic" label="Price" variant="outlined" sx={textFieldStyle} name='price' onChange={this.handleInput}/>
                <Fab sx={fabStyle} color='primary' onClick={this.submitInput}>
                    <AddIcon />
                </Fab>
                </Box>
            </Modal>
            </>
        );
    }
}

export default Menu;
