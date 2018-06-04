import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

const styles = theme => ({
  card: {
    maxWidth: theme.spacing.unit * 40,
    margin: 'auto'
  },
  media: {
    width: theme.spacing.unit * 40,
    maxWidth: theme.spacing.unit * 40,
    height: theme.spacing.unit * 25
  }
});

function SoftwareProject(props) {
  const { classes } = props;

  const allChips = props.tech.map((tech, index) => <Chip key={`tech${index}`} label={tech} />)

  const disableLivedButton = (props.liveURL) ? false : true;

  return (
      <Grid item xs={12} sm={6} md={4} lg={3} className={classes.root}>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={props.imageurl} title={props.imageTitle} />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.headline}
            </Typography>
            <Typography component="p">{props.description}</Typography>
          </CardContent>
          {allChips}
          <CardActions>
            <Button size="small" color="primary" href={props.liveURL} target="_blank" rel="noopener noreferrer" disabled={disableLivedButton}>
              Live
            </Button>
            <Button size="small" color="primary" href={props.sourceURL} target="_blank" rel="noopener noreferrer">
              Source
            </Button>
          </CardActions>
        </Card>
      </Grid>
  );
}

SoftwareProject.propTypes = {
  classes: PropTypes.object.isRequired,
  imageURL: PropTypes.string,
  imageTitle: PropTypes.string,
  headline: PropTypes.string,
  description: PropTypes.string,
  liveURL: PropTypes.string,
  sourceURL: PropTypes.string
};

export default withStyles(styles)(SoftwareProject);
