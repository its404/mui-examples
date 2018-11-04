import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MessageIcon from "@material-ui/icons/Message";
import { history } from "app/views/layouts/Routes";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

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
        <ListItem button onClick={() => history.push("/global-message")}>
          <ListItemIcon>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText primary="Global Message" />
        </ListItem>
        <ListItem button onClick={() => history.push("/stepper")}>
          <ListItemIcon>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText primary="Mobile Stepper" />
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
