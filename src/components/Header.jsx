import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet, Link, NavLink } from "react-router-dom";
import { Container, Menu, MenuItem, Tab, Tabs } from "@mui/material";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import CssBaseline from '@mui/material/CssBaseline';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


export default function Header(props) {
  
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Container>
          <Toolbar>
                      <MenuItem>
                              
                              <NavLink to="/" > 
                                    <Typography textAlign="center"  variant="h6"   component="div"  sx={{ flexGrow: 1 }} >
                                          Home
                                    </Typography>
                              </NavLink>
                      </MenuItem>
                      <MenuItem>
                              <NavLink to="/about">
                              <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                              >
                                About
                              </Typography>
                              </NavLink>
                      </MenuItem>
                                          <Button
                                  sx={{ marginLeft: "auto" }}
                                  variant="contained"
                                >
                                   <Link to="/login">Логін</Link>
                                </Button>
                                <Button
                                  sx={{ marginLeft: "10px" }}
                                  variant="contained"
                                >
                                   <Link to="/register">Реєстрація</Link>
                                </Button>
            
          </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
         
        </Box>
      </Container>
   
   
    </>
  );
}
