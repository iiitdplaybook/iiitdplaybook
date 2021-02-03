/** @format */

import React from "react";
import "./Navbar.css";
import { auth } from "../fire";
import {
  Avatar,
  Button,
  MenuItem,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuList,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

// import Sticky from "react-sticky-el";
// import logoWhite from "../Assets/SVG/Asset1.svg";
// import logoColored from "../Assets/SVG/Asset2.svg";

// import Sticky from "react-sticky-el";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// Icons
import Icon from "@material-ui/core/Icon";
import ExploreIcon from "@material-ui/icons/GridOn";
import ToolsIcon from "@material-ui/icons/Build";
import ContributeIcon from "@material-ui/icons/Group";
import FiberNewIcon from "@material-ui/icons/Storefront";
import firebase from "firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

const logoWhite = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/SVG/Asset1.svg";
const logoColored = "https://cdn.statically.io/gh/PabitraBansal/StudentPlaybook/6d20d536/src/Assets/SVG/Asset2.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

function Navbar({ loggedIn, colorStatus, stickyCond }) {
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
    if (event.key === "Tab") {
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

  toast.configure();
  const notify = () =>
    toast.info("Sign in with IIITD mail to access", {
      draggablePercent: 30,
      autoClose: 2500,
    });

  function showError() {
    toast.error("Sign in with IIITD mail to access");
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  let history = useHistory();
  const signOut = () => {
    auth
      .signOut()
      .then((result) => {
        localStorage.removeItem("isSignedIn");
        history.push("/login");
      })
      .catch((error) => {});
  };

  const themeWhite = createMuiTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
  });

  const themeBlack = createMuiTheme({
    palette: {
      primary: {
        main: "#141414",
      },
    },
  });

  function launchPopper() {
    const authData = firebase.auth.currentUser;
    return (
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem>{user?.displayName}</MenuItem>
                  {/* {loggedIn ? ( */}
                  {localStorage.getItem("isSignedIn") ? (
                    <MenuItem id="signBtn" onClick={signOut} color="primary">
                      Sign out
                    </MenuItem>
                  ) : (
                    <MenuItem
                      id="signBtn"
                      component={Link}
                      color="primary"
                      to={"/login"}
                    >
                      Sign in
                    </MenuItem>
                  )}
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
      {stickyCond ? (
        <div
          className="navbar"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,.5))",
            position: "fixed",
            top: "0",
            width: "98vw",
          }}
        >
          <div className="navbar__left">
            <Link to="/homepage" style={{ textDecoration: "none" }}>
              {colorStatus ? (
                <img id="logo" src={logoColored} alt="Student Playbook" />
              ) : (
                <img id="logo" src={logoWhite} alt="Student Playbook" />
              )}
            </Link>
          </div>
          <div className="navbar__right">
            <ThemeProvider theme={colorStatus ? themeBlack : themeWhite}>
              {/* {loggedIn ? (
                  <Button
                    id="btn"
                    component={Link}
                    color="primary"
                    to={"/explore"}
                    startIcon={
                      <ExploreIcon
                        style={{ color: "primary", padding: "10%" }}
                      />
                    }
                  >
                    <div className="removeText">Explore</div>
                  </Button>
                ) : (
                  <Button
                    id="btn"
                    component={Link}
                    color="primary"
                    to={"/explore"}
                    style={{ color: "red" }}
                    startIcon={
                      <ExploreIcon
                        style={{ color: "primary", padding: "10%" }}
                      />
                    }
                  >
                    <div className="removeText">Explore</div>
                  </Button>
                )} */}
              <Button
                id="btn"
                component={Link}
                color="primary"
                to={"/explore"}
                startIcon={
                  <ExploreIcon style={{ color: "primary", padding: "10%" }} />
                }
              >
                <div className="removeText">Explore</div>
              </Button>
              {!localStorage.getItem("isSignedIn") ? (
                <Button
                  id="btn"
                  // component={Link}
                  color="primary"
                  onClick={notify}
                  // to={"/ComingSoonTools"}
                  style={{ opacity: ".5" }}
                  startIcon={
                    <ToolsIcon style={{ color: "primary", padding: "10%" }} />
                  }
                >
                  <div className="removeText">Tools</div>
                </Button>
              ) : (
                <Button
                  id="btn"
                  component={Link}
                  color="primary"
                  to={"/ComingSoonTools"}
                  startIcon={
                    <ToolsIcon style={{ color: "primary", padding: "10%" }} />
                  }
                >
                  <div className="removeText">Tools</div>
                </Button>
              )}
              {/* <Button
                  id="btn"
                  component={Link}
                  color="primary"
                  to={"/ComingSoonTools"}
                  startIcon={
                    <ToolsIcon style={{ color: "primary", padding: "10%" }} />
                  }
                >
                  <div className="removeText">Tools</div>
                </Button> */}
              {!localStorage.getItem("isSignedIn") ? (
                <Button
                  id="btn"
                  color="primary"
                  // component={Link}
                  // to={"/contribute/testimonies"}
                  onClick={notify}
                  style={{ opacity: ".5" }}
                  startIcon={
                    <ContributeIcon
                      style={{ color: "primary", padding: "10%" }}
                    />
                  }
                >
                  <div className="removeText">Contribute</div>
                </Button>
              ) : (
                <Button
                  id="btn"
                  color="primary"
                  component={Link}
                  to={"/contribute/testimonies"}
                  // onClick={notify}
                  startIcon={
                    <ContributeIcon
                      style={{ color: "primary", padding: "10%" }}
                    />
                  }
                >
                  <div className="removeText">Contribute</div>
                </Button>
              )}
              {/* <Button
                  id="btn"
                  // component={Link}
                  color="primary"
                  // to={"/contribute/testimonies"}
                  onClick={notify}
                  startIcon={
                    <ContributeIcon
                      style={{ color: "primary", padding: "10%" }}
                    />
                  }
                >
                  <div className="removeText">Contribute</div>
                </Button> */}
              <Button
                id="btn"
                component={Link}
                color="primary"
                to={"/supplies"}
                startIcon={
                  <FiberNewIcon
                    style={{
                      color: "primary",
                      padding: "2%",
                      transform: "scale(1.3)",
                    }}
                  />
                }
              >
                <div className="removeText">Supplies</div>
              </Button>

              {localStorage.getItem("isSignedIn") ? (
                <Icon
                  className="userIcon"
                  ref={anchorRef}
                  aria-controls={open ? "menu-list-grow" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  <Avatar id="pic" src={user?.photoURL} alt="User" />
                </Icon>
              ) : (
                <Button id="btn" component={Link} to={"/login"} color="primary">
                  Sign In
                </Button>
              )}

              {launchPopper()}
            </ThemeProvider>
          </div>
        </div>
      ) : (
        <div className="navbar">
          <div className="navbar__left">
            <Link to="/homepage" style={{ textDecoration: "none" }}>
              {colorStatus ? (
                <img id="logo" src={logoColored} alt="Student Playbook" />
              ) : (
                <img id="logo" src={logoWhite} alt="Student Playbook" />
              )}
            </Link>
          </div>
          <div className="navbar__right">
            <ThemeProvider theme={colorStatus ? themeBlack : themeWhite}>
              <Button
                id="btn"
                component={Link}
                color="primary"
                to={"/explore"}
                startIcon={
                  <ExploreIcon style={{ color: "primary", padding: "10%" }} />
                }
              >
                <div className="removeText">Explore</div>
              </Button>
              {!localStorage.getItem("isSignedIn") ? (
                <Button
                  id="btn"
                  // component={Link}
                  color="primary"
                  onClick={notify}
                  style={{ opacity: ".5" }}
                  // to={"/ComingSoonTools"}
                  startIcon={
                    <ToolsIcon style={{ color: "primary", padding: "10%" }} />
                  }
                >
                  <div className="removeText">Tools</div>
                </Button>
              ) : (
                <Button
                  id="btn"
                  component={Link}
                  color="primary"
                  to={"/ComingSoonTools"}
                  startIcon={
                    <ToolsIcon style={{ color: "primary", padding: "10%" }} />
                  }
                >
                  <div className="removeText">Tools</div>
                </Button>
              )}
              {/* <Button
                id="btn"
                component={Link}
                color="primary"
                to={"/ComingSoonTools"}
                startIcon={
                  <ToolsIcon style={{ color: "primary", padding: "10%" }} />
                }
              >
                <div className="removeText">Tools</div>
              </Button> */}
              {!localStorage.getItem("isSignedIn") ? (
                <Button
                  id="btn"
                  color="primary"
                  // component={Link}
                  // to={"/contribute/testimonies"}
                  onClick={notify}
                  style={{ opacity: ".5" }}
                  startIcon={
                    <ContributeIcon
                      style={{ color: "primary", padding: "10%" }}
                    />
                  }
                >
                  <div className="removeText">Contribute</div>
                </Button>
              ) : (
                <Button
                  id="btn"
                  color="primary"
                  component={Link}
                  to={"/contribute/testimonies"}
                  // onClick={notify}
                  startIcon={
                    <ContributeIcon
                      style={{ color: "primary", padding: "10%" }}
                    />
                  }
                >
                  <div className="removeText">Contribute</div>
                </Button>
              )}
              {/* <Button
                id="btn"
                component={Link}
                color="primary"
                to={"/contribute/testimonies"}
                startIcon={
                  <ContributeIcon
                    style={{ color: "primary", padding: "10%" }}
                  />
                }
              >
                <div className="removeText">Contribute</div>
              </Button> */}
              <Button
                id="btn"
                component={Link}
                color="primary"
                to={"/supplies"}
                // startIcon={<SuppliesIcon />}
                startIcon={
                  <FiberNewIcon
                    style={{
                      color: "primary",
                      padding: "2%",
                      transform: "scale(1.3)",
                    }}
                  />
                }
              >
                <div className="removeText">Supplies</div>
              </Button>

              {localStorage.getItem("isSignedIn") ? (
                <Icon
                  className="userIcon"
                  ref={anchorRef}
                  aria-controls={open ? "menu-list-grow" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  <Avatar id="pic" src={user?.photoURL} alt="User" />
                </Icon>
              ) : (
                <Button id="btn" component={Link} to={"/login"} color="primary">
                  Sign In
                </Button>
              )}

              {launchPopper()}
            </ThemeProvider>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
