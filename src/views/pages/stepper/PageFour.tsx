import { Paper, Typography } from "@material-ui/core";
import * as React from "react";

interface IProps extends React.Props<any> {}

class PageFour extends React.Component<IProps, {}> {
  public render() {
    return (
      <Paper>
        <Typography>Page 4</Typography>
      </Paper>
    );
  }
}

export default PageFour;
