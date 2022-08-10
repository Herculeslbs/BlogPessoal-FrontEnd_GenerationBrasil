import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let history = useNavigate();
    const dispatch = useDispatch();

    function goLogout(){
        dispatch(addToken(''));
        alert("Usuário deslogado")
        history('/login')
    }

    var navbarComponent;

    if(token != ""){
        navbarComponent = <AppBar position="static"style={{backgroundColor:"#303F9F"}}>
        <Toolbar variant="dense">
            <Box className='cursor1'>
                <Typography variant="h5" color="inherit">
                    Blog Pessoal
                </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
                <Link to = "/home" className='cursor'>
                <Box mx={1} >
                    <Typography variant="h6" color="inherit">
                        Home
                    </Typography> 
                </Box>
                </Link>
                <Link to = "/posts" className='cursor'>
                <Box mx={1} >
                    <Typography variant="h6" color="inherit">
                        Postagens
                    </Typography> 
                </Box>
                </Link>
                <Link to = "/temas" className='cursor'>
                <Box mx={1} >
                    <Typography variant="h6" color="inherit">
                        Temas
                    </Typography> 
                </Box>
                </Link>
                <Link to = "/formularioTema" className='cursor'>
                <Box mx={1} >
                    <Typography variant="h6" color="inherit">
                        CadastrarTemas
                    </Typography> 
                </Box>
                </Link>
                
                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            Logout
                        </Typography> 
                    </Box>
                
                
            </Box>
        </Toolbar>
    </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    );
};

export default Navbar;
