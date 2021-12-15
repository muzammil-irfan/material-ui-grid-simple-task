import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Container,
  Box,
  Typography,
  TextField,
  FormLabel,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Autocomplete,
  Checkbox,
  Button
} from "@mui/material";
import DropDownV5 from "./Dropdown";

export default function MuiFormV5() {
  const [show, setshow] = useState("");
  const formik = useFormik({
    initialValues: {
      Categories: "",
      subCategories: "",
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
  // const classes = useStyles();
  const values = formik.values;
  const change = formik.handleChange;
  
  //function to handle changes of dropdown
  const handleDropdownChange = (e)=>{
    const subCategoryCheck = e.target.id.includes('subCategories');
    if(subCategoryCheck){
        values.subCategories = e.target.innerText;
    }else{
        values.Categories = e.target.innerText;
        setshow(values.Categories);
    }
}
  return (
    <>
      <Container
        fixed
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box boxShadow={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: ["300px", "500px"],
              margin: "10px 10px",
              borderRadius: "20px",
              padding: "20px",
            }}
            component="form"
            onSubmit={formik.handleSubmit}
          >
            {/* <form > */}
            <Typography variant="h5" align="center">
              Form Using Formik
            </Typography>
            <Typography variant="h5" align="center">
              Material V5
            </Typography>
            <DropDownV5 categoryValue={values.Categories} subCategoruValue={values.subCategories} show={show} onChange={handleDropdownChange}  />
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              onChange={change}
              value={values.name}
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
                sx={{
                  flexDirection: "row",
                }}
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
            <Autocomplete
              id="city"
              value={values.city}
              onChange={(event)=>{values.city = event.target.innerText}}
              options={['Karachi','Islamabad','Lahore']}
              renderInput={(params) => (
                <TextField {...params} label="City"  />
              )}
            />
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
              sx={{margin: "0px 100px"}}
              variant="outlined"
              color="primary"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

