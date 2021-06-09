import { React } from 'react';
import '../../App.css';
import context from '../../core/context';
import MaximumList from './maximumList';

const style = {
	position: 'absolute',
	height: '100%',
	width: '25%',
	background: 'wheat',
	top: 0,
	left: '50%',

};

const Maximum = () => {

	return (
		<div className='Maximum' style={ style }>
		<div><h3>Maximum</h3></div>
		<div> { MaximumList() } </div>
		</div>
	);
};

export default Maximum;
