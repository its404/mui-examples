import * as React from "react";

interface IProps extends React.Props<any> {}

class HomePage extends React.Component<IProps, {}> {
  public render() {
    return <h1>Hello World</h1>;
  }
}

export default HomePage;
