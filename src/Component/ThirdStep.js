import React, { useContext } from 'react'
import { Button, TextField } from '@mui/material'
import { multiData } from '../UseContext'


const ThirdStep = () => {
  const { setStep, userdata, setData, btn , submitData ,Handelsubmit} = useContext(multiData)
 

  return (
    <div>

        <TextField label="District" margin='normal' variant='outlined' color='success'
          value={userdata.district} name='district'  onChange={(e) => setData({ ...userdata, district: e.target.value })}
        /> <br /> 

        <TextField label="State" margin='normal' variant='outlined' color='success'
          value={userdata.state} name='state' onChange={(e) => setData({ ...userdata, state: e.target.value })}
        /> <br /> 

        <TextField label="Pin Code" margin='normal' variant='outlined' color='success'
          value={userdata.pin} name='pin' onChange={(e) => setData({ ...userdata, pin: e.target.value })}
        /> <br /> 

        <Button onClick={() => setStep(2)} variant='contained' color='primary'>Back</Button>
        <Button onClick={submitData} className='mx-2' variant='contained' color='success'>Submit</Button> <br />
        <button disabled={btn} onClick={Handelsubmit} className='btn btn-danger mt-3'>Submit For Api</button>

      </div>
     
  )
}

export default ThirdStep
