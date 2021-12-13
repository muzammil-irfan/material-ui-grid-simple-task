import React from "react";
import { TextField, MenuItem } from "@material-ui/core";
export default function Dropdown(props) {
  return (
    <>
      <TextField
        id="Categories"
        select
        label="Categories"
        value={props.categoryValue}
        onChange={props.onChange}
        variant="outlined"
        name="Categories"
      >
        <MenuItem key="Cars" value="Cars">
          Cars
        </MenuItem>
        <MenuItem key="Phones" value="Phones">
          Phones
        </MenuItem>
      </TextField>
      {props.show === 'Cars' && (
        <>
          <TextField
            id="subCategories"
            select
            label="subCategories"
            value={props.subCategoryValue}
            onChange={props.onChange}
            variant="outlined"
            name="subCategories"
          >
            <MenuItem key="Honda" value="Honda">
              Honda
            </MenuItem>
            <MenuItem key="BMW" value="BMW">
              BMW
            </MenuItem>
            <MenuItem key="Toyota" value="Toyota">
              Toyota
            </MenuItem>
          </TextField>
        </>
      )}
      {props.show === 'Phones' && (
        <>
          <TextField
            id="subCategories"
            select
            label="SubCategories"
            value={props.subCategoryValue}
            onChange={props.onChange}
            variant="outlined"
            name="subCategories"
          >
            <MenuItem key="Samsung" value="Samsung">
              Samsung
            </MenuItem>
            <MenuItem key="Apple" value="Apple">
              Apple
            </MenuItem>
            <MenuItem key="Sony" value="Sony">
              Sony
            </MenuItem>
          </TextField>
        </>
      )}
    </>
  );
}