import { AppBar, Switch, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = (props) => {
    return (
      <AppBar
        position="static"
        sx={{
          mb: 4,
        }}
      >
        <Toolbar>
          <Typography variant="h6">Store <Switch checked={props.darkMode} onChange={props.handleDarkMode}/></Typography>
        </Toolbar>
        
      </AppBar>
    );
};

export default Header;