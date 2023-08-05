import React, { useContext } from 'react'
import { Button, TextField } from '@mui/material'
import { multiData } from '../UseContext'

const SecondStep = () => {
  const { setStep, userdata, setData } = useContext(multiData)
  return (
    <div>
      <TextField label="Age" margin='normal' variant='outlined' color='success'
        value={userdata.age} name='age' onChange={(e) => setData({ ...userdata, age: e.target.value })}
      /> <br /> 
      <TextField label="Address" margin='normal' variant='outlined' color='success'
        value={userdata.address} name='address' onChange={(e) => setData({ ...userdata, address: e.target.value })}
      /> <br /> 
      <TextField label="Contact Numbar" margin='normal' variant='outlined' color='success'
        value={userdata.contact} name='contact' onChange={(e) => setData({ ...userdata, contact: e.target.value })}
      /> <br /> 
      <Button className='mx-2' onClick={() => setStep(1)} variant='contained' color='primary'>Back</Button>

      <Button onClick={() => setStep(3)} variant='contained' color='success'>Next</Button>
    </div>
  )
}

export default SecondStep
