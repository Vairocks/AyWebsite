import React from 'react';
import { AppBar, Avatar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, CssBaseline, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { NavLink } from "react-router-dom";
import logo from './assets/brand_logo.png'
import './styles.css';


const navLinks = [
  { text: 'Home', path: '/_home' },
  { text: 'Vision', path: '/_vision' },
  { text: 'App', path: '/_app' },
  { text: 'Blogs', path: '/_blogs' },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));


  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      
      <AppBar position='static' className='bar' sx={{ backgroundColor: theme.palette.background }}>
        <Toolbar>
          <img
            src={logo}
            alt="Logo"
            style={{ padding: 5 }}
          />
          <Typography variant="h5" sx={{ flexGrow: 1, color: theme.palette.text.secondary, paddingLeft: 5, fontFamily: "'Ruluko', sans-serif" }}>
            Ayurveda Kripa
          </Typography>
          {!isMobileView ? <div>
            {navLinks.map((link) => (
              <Button color="inherit" key={link.text} >
                <NavLink
                  to={link.path}
                  className={({ isActive, isPending }) => { return (isActive ? "active" :theme.palette.mode==='dark'?"darkmode": "pending") }
                  
                  }
                >
                  <Typography variant='subtitle2'>{link.text}</Typography>
                </NavLink>
              </Button>
            ))}
          </div> :
            <IconButton edge="start" color="black" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon color='black'/>
            </IconButton>}
        </Toolbar>

      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <div>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.text} >
                <NavLink
                  to={link.path}
                  className={({ isActive, isPending }) => { return (isActive ? "active" : "pending") }
                  }
                >
                  <ListItemText >
                    <Typography variant='subtitle2'>{link.text}</Typography>
                  </ListItemText>
                </NavLink>
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
};