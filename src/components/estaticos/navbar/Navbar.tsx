import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage'
import './Navbar.css'
function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let history = useNavigate();

    function goLogout(){
        setToken('')
        alert("Usuário deslogado")
        history('/login')
    }
    return (
        <>
            <AppBar position="static"style={{backgroundColor:"#303F9F"}}>
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
        </>
    );
};

export default Navbar;
