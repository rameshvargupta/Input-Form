
import { useContext, useState, useEffect } from 'react';
import * as React from 'react';
import { TextField, Button } from '@mui/material';
import { multiData } from '../UseContext';

export default function FirstStep() {
  const { setStep, userdata, setData } = useContext(multiData);
  const [btndis, setBtnDis] = useState(true);

  useEffect(() => {
    const areAllFieldsEmpty = Object.values(userdata).every((value) => value === '');
    setBtnDis(areAllFieldsEmpty);
  }, [userdata]);

  return (
    <div>
      <TextField
        label="First Name"
        id="FirstName"
        required
        margin="normal"
        variant="outlined"
        color="secondary"
        className="check"
        value={userdata.first}
        name="first"
        onChange={(e) => setData({ ...userdata, first: e.target.value })}
      />
      <br />

      <TextField
        label="Last Name"
        required
        margin="normal"
        variant="outlined"
        color="secondary"
        value={userdata.last}
        name="last"
        onChange={(e) => setData({ ...userdata, last: e.target.value })}
      />
      <br />

      <TextField
        label="Email Id"
        required
        margin="normal"
        variant="outlined"
        color="secondary"
        value={userdata.email}
        name="email"
        onChange={(e) => setData({ ...userdata, email: e.target.value })}
      />
      <br />

      <Button disabled={btndis} onClick={() => setStep(2)} variant="contained" color="success">
        Next
      </Button>
    </div>
  );
}

