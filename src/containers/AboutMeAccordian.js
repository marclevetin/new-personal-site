import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "100%",
    flexShrink: 0,
    textAlign: "left"
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  typography: {
    textAlign: "left"
  }
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={this.handleChange("panel1")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Software development
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography component="p" paragraph={true} className={classes.typography}>
              I’m a full stack software developer, with experience in the MERN
              stack and Ruby on Rails. I graduated from Launch Academy in 2017.
              I’m currently part of the faculty at the UNH Coding Bootcamp, and
              am always on the lookout to learn something new.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={this.handleChange("panel2")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Product Management
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.typography}>
              I’m an agile product manager with certifications from Pragmatic
              Marketing and Scrum Alliance. I’ve worked at SAAS companies that
              specialize in property management, email marketing and the utility
              industry, and recruiting. I’ve worked with teams on small,
              incremental enhancements aimed at increasing customer
              satisfaction; technical changes; and large features that greatly
              enhanced the company’s offering.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={this.handleChange("panel3")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Customer service
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.typography}>
              I grew a product support function from the ground up including
              processes and procedures; customer facing help systems; and the
              underlying technologies.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel4"}
          onChange={this.handleChange("panel4")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Dance instruction
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.typography}>
              I’ve taught dance lessons in ballroom, lindy hop, and west coast
              swing. I was a national competitor in west coast swing. I helped
              organize Swingin’ New England for over a decade. Today, you can
              find me scoring dance contests.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel5"}
          onChange={this.handleChange("panel5")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Musician</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.typography}>
              I play saxophone, bassoon, and ukulele. I was a complete band geek
              growing up, playing in marching band, jazz band, concert band,
              chorus, saxophone quartet, woodwind quintet. I hold a BA in Music
              (bassoon) from Syracuse University. Today, my playing is limited
              to the ukulele. I play for fun and in hopes that I can inspire my
              kid to get into music when she’s older.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel6"}
          onChange={this.handleChange("panel6")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Pets</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.typography}>
              Dogs rock. Guinea pigs are amazing. That is all.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
         <ExpansionPanel
          expanded={expanded === "panel7"}
          onChange={this.handleChange("panel7")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Hats</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.typography}>
              You noticed the URL, eh?  I look amazingly stupid in baseball hats.  Over the years, I’ve worn a variety of fedoras, flat caps, and bowlers.  Join me; shop at Goorin Brothers.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ControlledExpansionPanels);
