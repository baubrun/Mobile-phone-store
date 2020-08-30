import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


const Title = ({ title }) => {

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h5" 
          style={{fontFamily: "Permanent Marker, cursive"}}
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Title;
