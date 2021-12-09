import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
const useStyles = makeStyles({
  container: {
    backgroundColor: "#23B14D",
    border: "5px solid #000",
    padding: "5px 5px",
  },
  boxStyle: {
    backgroundColor: "#FFC90D",
    border: "5px solid #000",
    height: "350px",
  },
  boxStyle2: {
    backgroundColor: "#FFC90D",
    border: "5px solid #000",
    height: "300px",
    width: "200px",
    marginLeft: "20px",
  },
});

 function GridTask() {
  const classes = useStyles();
  return (
    <>
      <Container fluid className={classes.container}>
        <Grid container spacing={6}>
          <Grid item md={3}>
            <Box width="250px" className={classes.boxStyle}></Box>
          </Grid>
          <Grid item md={4}>
            <Box width="250px" className={classes.boxStyle} mx={3}></Box>
          </Grid>
          <Grid item md={5}>
            <Box width="250px" className={classes.boxStyle}></Box>
          </Grid>
          <Grid item md={3}>
            <Box width="200px" className={classes.boxStyle} m={2}></Box>
          </Grid>
          <Grid item md={4}>
            <Box width="250px" className={classes.boxStyle} mx={3}></Box>
          </Grid>
          <Grid item md={4}>
            <Box width="250px" className={classes.boxStyle}></Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default GridTask;