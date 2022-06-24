import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import {Link as LinkRouter} from 'react-router-dom'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const pages = [
  {to: '/createCompany', name: 'Create a company'},
  {to: '/getCompanies', name: 'Get companies'},
  {to: '/createJob', name: 'Create a job'},
  {to: '/getJobs', name: 'Get jobs'},
]

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: 'rgb(105,24,152)'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* ---------- LABEL TITLE ---------- */}
          <Typography noWrap component="a" href="/"
            sx={{
              width: '40px',
              height: '40px',
              display: {xs: 'none', sm: 'flex'},
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '20px',
              fontWeight: 700,
              backgroundColor: 'rgb(224,224,224)',
              textDecoration: 'none',
              fontFamily: 'Paytone One',
              borderRadius: '20px'}}>
              rJ</Typography>

          {/* ---------- BUTTON OPTIONS ---------- */}
          <Box sx={{ flexGrow: 1, display: {xs: 'flex', sm: 'none'} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu} sx={{p: 0}}>
              <MenuIcon sx={{
                width: '40px',
                height: '40px',
                padding: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'rgb(105,24,152)',
                backgroundColor: 'rgb(224,224,224)',
                borderRadius: '20px'}} />
              </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{display: {xs: 'block', md: 'none'}}}>
                {pages.map((everyPage,index) => (
                <LinkRouter key={index} to={everyPage.to} onClick={handleCloseNavMenu}>
                    <MenuItem sx={{'&:hover': {bgcolor: 'rgb(224,224,224)'}}}>
                        <Typography sx={{padding: '2px', paddingLeft: '6px', paddingRight: '6px', color: 'rgb(2,0,3)'}}>{everyPage.name}</Typography>
                    </MenuItem>
                </LinkRouter>))}
            </Menu>
          </Box>

          {/* ---------- BUTTON TITLE ---------- */}
          <Typography variant="h5" noWrap component="a" href="/" sx={{
            display: { xs: 'flex', sm: 'none' },
            flexGrow: 1,
            fontFamily: 'Paytone One',
            color: 'rgb(224,224,224)'}}>
            rosarioJobs</Typography>

          {/* ---------- LABEL OPTIONS ---------- */}
          <Box sx={{flexGrow: 1, display: {xs: 'none', sm: 'flex'}}}>
            {pages.map((page,index) => (
            <Button key={index} onClick={handleCloseNavMenu} sx={{color: 'white', display: 'block'}}>
              <LinkRouter to={page.to}>
                <Typography variant='h6' sx={{
                  color: 'white',
                  padding: '2px',
                  paddingLeft: '6px',
                  paddingRight: '6px',
                  '&:hover': {bgcolor: 'rgb(2,0,3)'}}}>
                  {page.name}</Typography>
              </LinkRouter>
            </Button>))}
          </Box>

          {/* ---------- USER OPTIONS ---------- */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'rgb(105,24,152)',
                  backgroundColor: 'rgb(224,224,224)',
                  textDecoration: 'none',
                  borderRadius: '20px'}} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}