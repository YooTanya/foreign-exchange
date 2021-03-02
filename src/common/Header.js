import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function ApplicationBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notiAnchorEl, setNotiAnchorEl] = React.useState(null);

  const isProfileMenuOpen = Boolean(anchorEl);
  const isNotificationMenuOpen = Boolean(notiAnchorEl);

  const handleNotificationMenuOpen = (event) => {
    setNotiAnchorEl(event.currentTarget);
  };

  const handleNotificationMenuClose = () => {
    setNotiAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const notificationMenuId = 'notification-menu';
  const renderNotificationMenu = (
    <Menu
      anchorEl={notiAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={notificationMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isNotificationMenuOpen}
      onClose={handleNotificationMenuClose}
    >
      <MenuItem onClick={handleNotificationMenuClose}>
        <span className="badge badge-pill badge-success">APPROVED</span>
        <span>UCL-2802219909</span>
      </MenuItem>
      <MenuItem onClick={handleNotificationMenuClose}>
        <span className="badge badge-pill badge-danger">REJECTED</span>
        <span>UCL-2802218898</span>
      </MenuItem>
    </Menu>
  );

  const menuId = 'account-menu';
  const renderProfileMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isProfileMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuClose}>Tanya Rimphanitchayakit</MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>Log out</MenuItem>
    </Menu>
  );


  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton 
              edge="end"
              aria-label="show 2 new notifications"
              aria-controls={notificationMenuId}
              aria-haspopup="true"
              color="inherit"
              onClick={handleNotificationMenuOpen}
            >
              <Badge badgeContent={2} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderNotificationMenu}
      {renderProfileMenu}
    </div>
  );
}
