import { Paper, Typography } from "@material-ui/core";
import * as React from "react";

interface IProps extends React.Props<any> {}

class PageOne extends React.Component<IProps, {}> {
  public render() {
    return (
      <Paper square>
        <Typography>Page One</Typography>
      </Paper>
    );
  }
}

export default PageOne;
