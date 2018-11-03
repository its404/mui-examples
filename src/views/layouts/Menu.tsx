import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { history } from "app/redux/Store";
import * as React from "react";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";

interface IProps
  extends RouteComponentProps<any>,
    React.Props<any>,
    WithStyles<typeof styles> {}

class Menu extends React.Component<IProps, {}> {
  public render() {
    return (
      <List>
        <ListItem button onClick={() => history.push("/")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => history.push("/login")}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
      </List>
    );
  }
}
const styles = createStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    padding: 20,
  },
});

export default withRouter(withStyles(styles)(Menu)) as React.ComponentClass<{}>;
