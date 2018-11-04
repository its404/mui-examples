import { Paper, Typography } from "@material-ui/core";
import * as React from "react";

interface IProps extends React.Props<any> {}

class PageThree extends React.Component<IProps, {}> {
  public render() {
    return (
      <Paper square>
        <Typography>Page 3</Typography>
      </Paper>
    );
  }
}

export default PageThree;
