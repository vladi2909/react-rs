import React from "react";

import TextField from '@mui/material/TextField';

class Forms extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <TextField id="standard-basic" label="First Name" variant="standard" />
        <TextField id="standard-basic" label="Last Name" variant="standard" />
        
      </form>
    );
  }
}

export default Forms;