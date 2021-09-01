import React from 'react';

// Alternative 1 - Best practise
const CustomButton = ({buttonText, buttonColor, clickHandler}) => { 
	return (
		<div
			onClick = {clickHandler}
			style = {{
				"backgroundColor": buttonColor	
			}}
		>
			{buttonText}
		</div>
	)
}

export default CustomButton;