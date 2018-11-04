import Content from "app/views/layouts/Content";
import GlobalMessage from "app/views/pages/GlobalMessage";
import HomePage from "app/views/pages/HomePage";
import StepperPage from "app/views/pages/stepper/StepperPage";
import createBrowserHistory from "history/createBrowserHistory";
import * as React from "react";

// Create a history
export const history = createBrowserHistory();

import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from "react-router-dom";

interface IProps extends RouteComponentProps<any>, React.Props<any> {}

class Routes extends React.Component<IProps, {}> {
  public render() {
    return (
      <Content>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/global-message" component={GlobalMessage} />
          <Route exact path="/stepper" component={StepperPage} />
        </Switch>
      </Content>
    );
  }
}

export default withRouter(Routes) as React.ComponentClass<{}>;
