import { React } from 'react';
import '../../App.css';


const style = {
	position: 'absolute',
	height: '100%',
	width: '25%',
	background: 'paleVioletRed',
	top: 0,
	left: '75%' ,
};

const Minimum = () => {

	return (
		<div className='Minimum' style={ style }>
		<div><h3>Minimum</h3></div>
		</div>
	);
};

export default Minimum;
