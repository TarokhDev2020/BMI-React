import React from 'react'
import BMIForm from './components/bmi/BMIForm';
import './App.css';

const App = () => {
  return (
    <div className = "App">
      <h3><b>B</b>ody <b>M</b>ass <b>I</b>ndex Calculator</h3>
      <BMIForm/>
    </div>
  )
}

export default App
