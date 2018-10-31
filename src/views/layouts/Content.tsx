import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface IProps extends RouteComponentProps<any>, React.Props<any> {}

class Content extends React.Component<IProps, {}> {
  public render() {
    return <div className="content">{this.props.children}</div>;
  }
}

export default withRouter(Content) as React.ComponentClass<{}>;
