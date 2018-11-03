import { Theme, WithStyles } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import amber from "@material-ui/core/colors/amber";
import green from "@material-ui/core/colors/green";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { withStyles } from "@material-ui/core/styles";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";
import {
  hideMessage,
  IHideMessageAction,
} from "app/redux/actions/MessageAction";
import { IRootState } from "app/redux/reducers/Reducers";
import * as React from "react";
import { connect } from "react-redux";

interface IProps extends WithStyles<typeof styles> {
  messages: string[];
  messageType: string;
  isOpen: boolean;
}

interface IState {
  open: boolean;
}

interface IDispatchProps {
  hideMessage: () => IHideMessageAction;
}

type IAllProps = IProps & IDispatchProps;

interface IIcon {
  success: React.ComponentType<SvgIconProps>;
  warning: React.ComponentType<SvgIconProps>;
  error: React.ComponentType<SvgIconProps>;
  info: React.ComponentType<SvgIconProps>;
  [key: string]: React.ComponentType<SvgIconProps>;
}

class Message extends React.Component<IAllProps, IState> {
  public static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    if (nextProps.isOpen) {
      return {
        ...prevState,
        open: true,
      };
    } else {
      return {
        ...prevState,
        open: false,
      };
    }
  }
  constructor(props: IAllProps) {
    super(props);
    this.state = {
      open: false,
    };
  }
  public handleClickAway = () => {
    this.setState({ open: false });
  };
  public render(): JSX.Element {
    const { messageType, messages, classes } = this.props;
    const Icon = icons[messageType];

    let contentClass: string = classes.success;
    switch (messageType) {
      case "error":
        contentClass = classes.error;
        break;
      case "info":
        contentClass = classes.success;
        break;
      case "warning":
        contentClass = classes.warning;
        break;
    }

    const message = messages.map((error: string, i: number) => (
      <div key={i}>{error}</div>
    ));
    return (
      <ClickAwayListener onClickAway={this.handleClickAway}>
        <Snackbar
          autoHideDuration={3000}
          onClose={() => {
            this.props.hideMessage();
          }}
          open={this.state.open}
        >
          <SnackbarContent
            className={contentClass}
            aria-describedby="client-snackbar"
            message={
              <span id="client-snackbar" className={classes.message}>
                <Icon className={`${classes.icon} ${classes.iconVariant}`} />
                {message}
              </span>
            }
          />
        </Snackbar>
      </ClickAwayListener>
    );
  }
}
const styles = (theme: Theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  message: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
});
const icons: IIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};
const mapDispatchToProps = {
  hideMessage,
};
export default connect<{}, IDispatchProps, {}, IRootState>(
  null,
  mapDispatchToProps,
)(withStyles(styles)(Message));
