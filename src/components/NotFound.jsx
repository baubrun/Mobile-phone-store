import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


const NotFound = () => {

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item>
        <Typography variant="h3" color="primary">
          404 NOT FOUND
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NotFound;
