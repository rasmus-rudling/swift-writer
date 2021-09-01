import React, { useState } from 'react';
import CustomButton from './CustomButton.jsx';

const TestButton = () => {
    const [message, setMessage] = useState("");
    
    return (
        <div>
            <h2>{message}</h2>
            <CustomButton 
                buttonText = "Show message"
                buttonColor = "red"
                clickHandler = {() => setMessage("Hello, nice to meet you!")}
            />
        </div>
    )
}
export default TestButton;