import React from "react";
import { Autocomplete,TextField } from "@mui/material";
function show(props){
    if(props.show === 'Cars'){
        return(
            <>
            <Autocomplete
              id="subCategories"
              name="subCategories"
              value={props.subCategoryValue}
              onChange={props.onChange}
              options={["Honda", "BMW","Toyota"]}
              renderInput={(params) => (
                <TextField {...params} label="SubCategories" />
              )}
            />
          </>
        )
    }else if(props.show === 'Phones'){
        return(
            <>
            <Autocomplete
              id="subCategories"
              name="subCategories"
              value={props.subCategoryValue}
              onChange={props.onChange}
              options={["Samsung", "Apple","Sony"]}
              renderInput={(params) => (
                <TextField {...params} label="SubCategories" />
              )}
            />
          </>
        )
    }
}
export default function DropDownV5(props) {
  return (
    <>
      <Autocomplete
        
        id="Categories"
        name="Categories"
        value={props.categoryValue}
        onChange={props.onChange}
        options={["Cars", "Phones"]}
        renderInput={(params) => <TextField {...params} label="Categories" />}
      />
        {show(props)}
    </>
  );
}
