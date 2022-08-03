import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material'
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs className="fundo" centered onChange={handleChange}>
            <Tab className="titulo3" label="Todas as postagens" value="1"/>
            <Tab className="titulo3" label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel  value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom  component="h5" align="center" className="texto5">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className="textoP">Projeto Blog Pessoal, projeto desenvolvido no instituto Generation Brasil, no curso de Desenvolvedor Java full stack Jr, desenvolvimento back-end no spring boot e desenvolvimento front-end no react.js, projeto desenvolvido por Hercules Lima.</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;