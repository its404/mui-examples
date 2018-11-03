import { createStyles, Theme } from "@material-ui/core";
import { WithStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import Message from "app/components/Message";
import IMessage from "app/models/IMessage";
import { IRootState } from "app/redux/reducers/Reducers";
import Menu from "app/views/layouts/Menu";
import Routes from "app/views/layouts/Routes";
import withRoot from "app/views/withRoot";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface IProps
  extends RouteComponentProps<void>,
    React.Props<any>,
    WithStyles<typeof styles> {}
interface IState {
  open: boolean;
}
interface IStateProps {
  message: IMessage;
}
type IAllProps = IStateProps & IProps;

class MainLayout extends React.Component<IAllProps, IState> {
  public state = {
    open: true,
  };

  public handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  public handleDrawerClose = () => {
    this.setState({ open: false });
  };

  public render() {
    const { classes, message } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <AppBar
            position="absolute"
            className={`${classes.appBar}  ${this.state.open &&
              classes.appBarShift} `}
          >
            <Toolbar
              disableGutters={!this.state.open}
              className={classes.toolbar}
            >
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={`${classes.menuButton} 
                  ${this.state.open && classes.menuButtonHidden}`}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                Material UI Examples
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: `${classes.drawerPaper} ${!this.state.open &&
                classes.drawerPaperClose}`,
            }}
            open={this.state.open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <Menu />
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Routes />
            <Message
              messages={message.messages}
              messageType={message.messageType}
              isOpen={message.isOpen}
            />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

const drawerWidth = 240;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    menuButtonHidden: {
      display: "none",
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing.unit * 9,
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      height: "100vh",
      overflow: "auto",
    },
    h5: {
      marginBottom: theme.spacing.unit * 2,
    },
  });

const mapStateToProps = (state: IRootState): IStateProps => ({
  message: state.message.message,
});

export default withRoot(
  withRouter(
    connect<IStateProps, {}, {}, IRootState>(mapStateToProps)(
      withStyles(styles)(MainLayout),
    ),
  ),
);
