import React, {useState} from 'react'
import Result from './Result';

const BMIForm = () => {

    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBMI] = useState();
    const [result, setResult] = useState('');

    const onCalculate = (e) => {
        e.preventDefault()
        let floatWeight = parseFloat(weight);
        let floatHeight = parseFloat(height);
        setBMI(floatWeight / Math.pow(floatHeight, 2));
        if (bmi < 18.5) {
            setResult('Underweight');
        }
        else if (bmi <= 18.5 && bmi <= 24.9) {
            setResult('Healthy');
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            setResult('Overweight');
        }
        else if (bmi >= 30 && bmi <= 34.9) {
            setResult('Obese');
        }
        else {
            setResult('Extremely Obese');
        }
        setAge('');
        setGender('');
        setHeight('');
        setWeight('');
    }

    return (
        <form className = "form" id = "form" onSubmit = {onCalculate}>
            <div className = "row-one">
                <input type = "text" className = "text-input" id = "age" autoComplete = "off" required value = {age} onChange = {e => setAge(e.target.value) }/><p className = "text">Age</p>
                <label className = "container">
                    <input type = "radio" name = "radio" id = "f" label = "Female" checked = {gender === 'Female'} value = {gender} onChange = {() => setGender('Female')}/><p className = "text">Female</p>
                    <span className = "checkmark"></span>
                </label>
                <label className = "container">
                    <input type = "radio" name = "radio" id = "m" label = "Male" checked = {gender === 'Male'} value = {gender} onChange = {() => setGender('Male')}/><p className = "text">Male</p>
                    <span className = "checkmark"></span>
                </label>
            </div>
            <div className = "row-two">
                <input type = "text" className = "text-input" id = "height" autoComplete = "off" required value = {height} onChange = {e => setHeight(e.target.value)}/><p className = "text">Height (cm)</p>
                <input type = "text" className = "text-input" id = "weight" autoComplete = "off" required value = {weight} onChange = {e => setWeight(e.target.value)}/><p className = "text">Weight (kg)</p>
            </div>
            <input type = "submit" id = "submit" value = "Submit"/>
            <Result bmi = {bmi} result = {result}/>
        </form>
    )
}

export default BMIForm
