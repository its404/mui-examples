import { Button } from "@material-ui/core";
import {
  IShowMessageAction,
  showMessage,
} from "app/redux/actions/MessageAction";
import { IRootState } from "app/redux/reducers/Reducers";
import * as React from "react";
import { connect } from "react-redux";

export interface IDispatchProps {
  showMessage: (messages: string[], messageType: string) => IShowMessageAction;
}

class GlobalMessage extends React.Component<IDispatchProps, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <h1>Global Message</h1>
        <h5>Click below button to show a Snackbar message</h5>
        <Button
          variant="contained"
          color="primary"
          onClick={this.showGlobalMessage}
        >
          Show Message
        </Button>
      </div>
    );
  }
  private showGlobalMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.props.showMessage(["Hello! This is a global message"], "success");
  };
}

const mapDispatchToProps = {
  showMessage,
};

export default connect<{}, IDispatchProps, {}, IRootState>(
  null,
  mapDispatchToProps,
)(GlobalMessage);
