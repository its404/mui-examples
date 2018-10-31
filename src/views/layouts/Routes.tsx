import * as React from "react";
import {
  Route,
  RouteComponentProps,
  withRouter,
  Switch,
} from "react-router-dom";
import Content from "app/views/layouts/Content";
import HomePage from "app/views/pages/HomePage";
import LoginPage from "app/views/pages/LoginPage";

interface IProps extends RouteComponentProps<any>, React.Props<any> {}

class Routes extends React.Component<IProps, {}> {
  public render() {
    return (
      <Switch>
        <Content>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
        </Content>
      </Switch>
    );
  }
}

export default withRouter(Routes) as React.ComponentClass<{}>;
