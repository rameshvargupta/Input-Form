import React, { useState,createContext } from 'react'
import App from './App'
import axios from 'axios'
export const multiData = createContext()


const UseContext = () => {
  const [currentstep, setStep] = useState(1)
  const [userdata, setData] = useState([])
  const [finaldata, setFinalData] = useState([])
  const [btn,setbtn]=useState(true)

  function submitData() {
    setFinalData([...finaldata, userdata]);
    setbtn(false);
  }

   
  const Handelsubmit = () => {
    axios.post("https://648b509417f1536d65eac987.mockapi.io/selector/", finaldata)
        .then(resp => {
          document.getElementById("alertBox").style.display="block"
           setTimeout(()=>{
            document.getElementById("alertBox").style.display="none"
           },3000)
            setData("")
            setStep(1)
        })
        .catch(err => console.log(err))
      
}

  return (
    <div>
      <multiData.Provider value={{currentstep, setStep, userdata, setData, finaldata, setFinalData,btn ,setbtn, submitData,Handelsubmit }}>
        <App />
      </multiData.Provider>
    </div>
)
}
export default UseContext



