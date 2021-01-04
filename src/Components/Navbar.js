/** @format */

import React from "react";
import "./Navbar.css";
import { auth } from "../fire";
import { Avatar, Button, 
  Menu, MenuItem, ClickAwayListener, Grow, Paper, Popper, MenuList } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import Sticky from 'react-sticky-el';
import logoWhite from "../Assets/SVG/Asset1.svg";
import logoColored from "../Assets/SVG/Asset2.svg";
import exploreLogo from "../Assets/explore_logo.svg";
import Supplies from "./Supplies/Supplies";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// Icons
import Icon from '@material-ui/core/Icon';
import ExploreIcon from '@material-ui/icons/GridOn';
import SuppliesIcon from '@material-ui/icons/LocalGroceryStore';
import ToolsIcon from '@material-ui/icons/Build';
import ContributeIcon from '@material-ui/icons/Group';
import FiberNewIcon from '@material-ui/icons/NewReleases';


import playbook_logo from '../Assets/playbook_logo_black.svg';
import { white, black } from "@material-ui/core/colors";
import firebase from "firebase";
// import playbook_logo from '../Assets/playbook_logo_blue.svg';

//fonts

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

function Navbar({loggedIn, colorStatus, stickyCond}) {
  const [{ user }] = useStateValue();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const signOut = () => {
    auth
      .signOut()
      .then((result) => {
        console.log(result);
        localStorage.removeItem("isSignedIn");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  
  const themeWhite = createMuiTheme({
    palette: {
      primary: {
        main: '#fff',
      },
    },
  });

  const themeBlack = createMuiTheme({
    palette: {
      primary: {
        main: '#141414',
      },
    },
  });

  function launchPopper(){
    const authData = firebase.auth.currentUser
    // const userData = firebase.firestore().collection('users').doc(authData.uid).get()
    return (
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem>
                    {user?.displayName}
                  </MenuItem>
                  {loggedIn? (<MenuItem id="signBtn" onClick={signOut} color='primary'>Sign out</MenuItem>) : (<MenuItem id="signBtn" component={Link} color='primary' to={'/'}>Sign in</MenuItem>)}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    );
  }

  return (
    <>
    {stickyCond? (
    <Sticky>
    <div className="navbar" style={{backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,.5))'}}>
      <div className="navbar__left">
      <Link to="/" style={{ textDecoration: "none" }}>
      {colorStatus? (<img id="logo" src={logoColored} alt="Student Playbook"/>) : (<img id="logo" src={logoWhite} alt="Student Playbook"/>)}
        </Link>
      </div>
      <div className="navbar__right">
      
        <ThemeProvider theme={colorStatus? (themeBlack) : (themeWhite)}>
          <Button  id='btn'  
            component={Link} 
            color='primary'
            to={"/explore"}
            startIcon={<ExploreIcon style={{ color:'primary', padding: "10%" }}/>}
            >
            <div className='removeText'>Explore</div>
          </Button>
          <Button  id='btn' 
            component={Link} 
            color='primary'
            to={"/ComingSoonTools"}
            startIcon={<ToolsIcon style={{  color:'primary', padding: "10%" }}/>}
            >
            <div className='removeText'>Tools</div>
          </Button>
          <Button  id='btn' 
            component={Link} 
            color='primary'
            to={"/contribute/testimonies"}
            startIcon={<ContributeIcon style={{ color:'primary', padding: "10%" }}/>}>
            <div className='removeText'>Contribute</div>
          </Button>
          <Button  id='btn' 
            component={Link} 
            color='primary'
            to={"/supplies"} 
            startIcon = {<FiberNewIcon style={{ color:'primary', padding: "2%", transform: "scale(1.3)" }}/>}>
            <div className='removeText'>Supplies</div>
          </Button>

          <Icon
            classname='userIcon'
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}>
            <Avatar id='pic' src={user?.photoURL} alt="User" />
          </Icon> 
        
          {launchPopper()}
        </ThemeProvider>
      </div>
    </div>
    </Sticky>
    ) : (
      <div className="navbar">
      <div className="navbar__left">
      <Link to="/" style={{ textDecoration: "none" }}>
      {colorStatus? (<img id="logo" src={logoColored} alt="Student Playbook"/>) : (<img id="logo" src={logoWhite} alt="Student Playbook"/>)}
        </Link>
      </div>
      <div className="navbar__right">
      
        <ThemeProvider theme={colorStatus? (themeBlack) : (themeWhite)}>
          <Button  id='btn'  
            component={Link} 
            color='primary'
            to={"/explore"}
            startIcon={<ExploreIcon style={{ color:'primary', padding: "10%" }}/>}
            >
            <div className='removeText'>Explore</div>
          </Button>
          <Button  id='btn' 
            component={Link} 
            color='primary'
            to={"/ComingSoonTools"}
            startIcon={<ToolsIcon style={{  color:'primary', padding: "10%" }}/>}
            >
            <div className='removeText'>Tools</div>
          </Button>
          <Button  id='btn' 
            component={Link} 
            color='primary'
            to={"/contribute/testimonies"}
            startIcon={<ContributeIcon style={{ color:'primary', padding: "10%" }}/>}>
            <div className='removeText'>Contribute</div>
          </Button>
          <Button  id='btn' 
            component={Link} 
            color='primary'
            to={"/supplies"} 
            // startIcon={<SuppliesIcon />}
            startIcon = {<FiberNewIcon style={{ color:'primary', padding: "2%", transform: "scale(1.3)" }}/>}>
            <div className='removeText'>Supplies</div>
          </Button>

          <Icon
            classname='userIcon'
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}>
            <Avatar id='pic' src={user?.photoURL} alt="User" />
          </Icon> 
        
          {launchPopper()}
        </ThemeProvider>
      </div>
    </div>
    )}
    </>
  );
}

export default Navbar;