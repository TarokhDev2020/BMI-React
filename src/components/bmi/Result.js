import React from 'react'

const Result = ({result, bmi}) => {
    return (
        bmi !== null && (
            <div>
                <h1>{result}</h1>
                <h2>{bmi}</h2>
            </div>
        )
    )
}

export default Result
