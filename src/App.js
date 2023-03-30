import { TextField,Stack,Button } from '@mui/material';
import './App.css';
import { useState } from 'react';
function App() {
  const [amount,setAmount]=useState(0)
  const [interest,setinterest]=useState(0)
  const [year,setYear]=useState(0)
  const [result,setResult]=useState(0)
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(amount==0 || interest==0 || year==0){
      alert('Enter valid Input')
    }

    else{
      setResult((parseInt(amount)*parseInt(interest)*parseInt(year))/100)
    }

  }
 const handleReset=()=>{
  setResult(0)
  window.location.reload()
 }
  return (
    <div className="app">
      <div className='container'>
        <div className='titleHeading'>
          <h1 className='title'>Simple Calculator</h1>
          <p className='title_para'>Calculate youir simple intrest easily</p>
        </div>
        <div className='amountCard'>
          <div className='card_text'>
            <h3 className='total_amount'>₹ {result}</h3>
            <p className='total_para'>Total simple intrest</p>
          </div>
        </div>
        <form onSubmit={e=>handleSubmit(e)}>
         <div className='text_area'>
            <div className="input_box">
            <TextField className="outlined-basic" label="₹ Principal Amount" variant="outlined"
            onChange={e=>setAmount(e.target.value)} />
            </div>
            <div className="input_box">
            <TextField className="outlined-basic" label="₹ Rate of interest (p.a) %" variant="outlined" 
            onChange={e=>setinterest(e.target.value)}/>
            </div>
            <div className="input_box">
            <TextField className="outlined-basic" label="Time Period (yr)" variant="outlined"
            onChange={e=>setYear(e.target.value)} />
            </div>
            <div className="btn_group">
             <Stack direction="row" spacing={4}>
             <Button type='submit' className='btn' style={{backgroundColor:'black'}} variant="contained">Calculate</Button>
              <Button onClick={handleReset} className='btn' variant="outlined"  >Reset</Button>
              </Stack>
            </div>
         </div >
        </form>
      </div>

    </div>
  );
}

export default App;
