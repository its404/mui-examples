import { WithStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import PageFour from "app/views/pages/stepper/PageFour";
import PageOne from "app/views/pages/stepper/PageOne";
import PageThree from "app/views/pages/stepper/PageThree";
import PageTwo from "app/views/pages/stepper/PageTwo";
import * as React from "react";

interface IProps extends React.Props<any>, WithStyles<typeof styles> {}

interface IState {
  activeStep: number;
}

const stepPages = [PageOne, PageTwo, PageThree, PageFour];

class StepperPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      activeStep: 0,
    };
  }

  public handleNext = () => {
    this.setState((state) => ({
      activeStep: state.activeStep + 1,
    }));
  };

  public handleBack = () => {
    this.setState((state) => ({
      activeStep: state.activeStep - 1,
    }));
  };

  public render() {
    const { classes } = this.props;
    const CurrentPage = stepPages[this.state.activeStep];

    return (
      <div className={classes.root}>
        <CurrentPage />
        <MobileStepper
          variant="progress"
          steps={4}
          position="static"
          activeStep={this.state.activeStep}
          className={classes.root}
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={this.state.activeStep === 3}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={this.state.activeStep === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 800,
      flexGrow: 1,
    },
  });

export default withStyles(styles)(StepperPage);
