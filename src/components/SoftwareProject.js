import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";

const styles = {
  card: {
    maxWidth: 345,
    margin: 10
  },
  media: {
    height: 200
  }
};

function SoftwareProject(props) {
  const { classes } = props;

  return <div className={classes.root}>
      <Grid item>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={props.imageurl} title={props.imageTitle} />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {props.headline}
            </Typography>
            <Typography component="p">{props.description}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" href={props.liveURL} target="_blank" rel="noopener noreferrer">
              Live
            </Button>
            <Button size="small" color="primary" href={props.sourceURL} target="_blank" rel="noopener noreferrer">
              Source
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>;
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
