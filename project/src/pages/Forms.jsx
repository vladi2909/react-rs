import React from "react";

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';

const form = {
  maxWidth: "600px",
  display: "flex",
  margin: "0 auto",
  padding: "0 0 20px",
  marginTop: "50px",
  borderRadius: "4px",
  boxShadow: "0px 0px 62px 0px rgba(34, 60, 80, 0.29)"
};

const block = {
  marginTop: "20px",
  display: "flex",
  justifyContent: "space-between"
};

class Forms extends React.Component {
  constructor() {
    super();
  }

  render() {
    const handleChange = (newValue) => { };
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
      <form style={form}>
        <Container maxWidth="sm">
          <div style={block}>
            <TextField id="standard-basic" label="First Name" variant="standard" />
            <TextField id="standard-basic" label="Last Name" variant="standard" />
          </div>

          <div style={block}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="birthday"
                inputFormat="MM/dd/yyyy"
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>

          <div style={block}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={10}
                label="City"
                onChange={handleChange}
              >
                <MenuItem value={10}>Minsk</MenuItem>
                <MenuItem value={20}>Brest</MenuItem>
                <MenuItem value={30}>Grodno</MenuItem>
                <MenuItem value={30}>Vitebsk</MenuItem>
                <MenuItem value={30}>Mogilev</MenuItem>
                <MenuItem value={30}>Gomel</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div style={block}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="agree to data processing" />
          </div>

          <div style={block}>
            <FormControlLabel
              control={
                <Switch {...label} defaultChecked />
              }
              label="I want to receive notifications"
            />
          </div>

          <div style={block}>
            <Button variant="outlined" component="label">
              Upload File
              <input type="file" hidden />
            </Button>
          </div>

          <div style={block}>
            <Button style={{margin: "0 auto"}} variant="contained">Submit</Button>
          </div>
        </Container>
      </form>
    );
  }
}

export default Forms;