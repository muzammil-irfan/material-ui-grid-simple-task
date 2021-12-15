import {
  Box,
  MenuItem,
  Container,
  makeStyles,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Checkbox,
  Typography,
  Button,
} from "@material-ui/core";
import Dropdown from "./Dropdown";
import {  useFormik } from "formik";
import React,{useState,useEffect} from "react";
// name,pass,email,gender(radio),details(text area),city(dropdown),terms & condition(checkbox), submit button
const useStyles = makeStyles((theme) => ({
  Container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Box: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
    width: "500px",
    margin: "10px 10px",
    borderRadius: "20px",
    padding: "20px",
  },
  radio: {
    flexDirection: "row",
  },
  Button: {
    margin: "0px 100px",
  },
}));

export default function MuiFormV4() {
  const [show, setshow] = useState(null)
  const formik = useFormik({
    initialValues: {
      Categories: "",
      subCategories:"",
      name: "",
      password: "",
      email: "",
      gender: "",
      details: "",
      city: "",
      termsCondition: true,
    },
    onSubmit: (values) => {
      console.log(values);
      alert("submit successfully");
    },
  });
  const classes = useStyles();
  const values = formik.values;
  const change = formik.handleChange;
  useEffect(() => {
    console.log(values.Categories)
    setshow(values.Categories)
  }, [values.Categories])
  return (
    <>
      <Container fixed className={classes.Container}>
        <Box boxShadow={6}>
          <form className={classes.Box} onSubmit={formik.handleSubmit}>
            <Typography variant="h5" align="center">
              Form Using Formik
            </Typography>
            <Typography variant="h5" align="center">
              Material V4
            </Typography>
            <Dropdown categoryValue={values.Categories} subCategoryValue={values.subCategories} show={show} onChange={change}/>
            <TextField
              type="text"
              value={values.name}
              onChange={change}
              variant="outlined"
              label="Name"
              id="name"
            />
            <TextField
              type="password"
              variant="outlined"
              id="password"
              label="Password"
              value={values.password}
              onChange={change}
            />
            <TextField
              value={values.email}
              onChange={change}
              variant="outlined"
              type="email"
              label="Email"
              id="email"
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender"
                value={values.gender}
                onChange={change}
                className={classes.radio}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio color="primary" />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio color="primary" />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio color="primary" />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              id="details"
              label="Details"
              multiline
              rows={4}
              value={values.details}
              onChange={change}
              variant="outlined"
            />
            <TextField
              id="city"
              select
              label="City"
              value={values.city}
              onChange={change}
              variant="outlined"
              name="city"
            >
              <MenuItem key="karachi" value="Karachi">
                Karachi
              </MenuItem>
              <MenuItem key="Islamabad" value="Islamabad">
                Islamabad
              </MenuItem>
              <MenuItem key="Lahore" value="Lahore">
                Lahore
              </MenuItem>
            </TextField>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.termsCondition}
                  onChange={change}
                  name="termsCondition"
                  color="primary"
                />
              }
              label="Terms &amp; Conditions"
            />

            <Button
              type="submit"
              className={classes.Button}
              variant="outlined"
              color="primary"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
}
