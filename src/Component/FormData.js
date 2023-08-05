
import { Stepper, StepLabel, Step } from '@mui/material';


import { useContext } from 'react';
import DisplayData from './DisplayData';
import { multiData } from '../UseContext';
import ThirdStep from './ThirdStep';
import SecondStep from './SecondStep';
import FirstStep from './FirstStep';



function FormData() {

    const { currentstep, finaldata } = useContext(multiData)
    const StepChecker = (Step) => {
        switch (Step) {
            case 1:
                return <FirstStep />
            case 2:
                return <SecondStep />
            case 3:
                return <ThirdStep />
            default: return Step
        }
    }

    return (
        <div className="App">
<div class="alert alert-success" id='alertBox' role="alert">
<b>  Your data is successfully submited</b>
</div>




            <h1 className='my-5' style={{  color: "red" }}><u>Multipal Input Field</u> </h1>
            <div className="center-stoper">
                <Stepper style={{ width: "40%", margin: "10px auto" }} activeStep={currentstep - 1} orientation='horizontal'>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>

                    <Step>
                        <StepLabel></StepLabel>
                    </Step>

                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                </Stepper>
            </div>
            {StepChecker(currentstep)}
            <div className='my-3'>
                <DisplayData />
            </div>



        </div>

    );
}

export default FormData;
