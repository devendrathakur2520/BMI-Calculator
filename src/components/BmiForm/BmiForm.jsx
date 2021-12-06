import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App/App.css';
import { bmiForm, setBmiData } from '../../action';
import { useSelector, useDispatch } from 'react-redux';
// const initialValues = {
// 	weight: '',
// 	height: '',
// 	date: ''
// }


const BmiForm = ({ change }) => {
	//const [state, setState] = useState(initialValues);
	const dispatch = useDispatch();
	const BMIData = useSelector((state) => state.bmiFormData.data)
	const { weight, height, date } = BMIData;
	const handleChange = e => {
		let { value, name } = e.target;
		if (value > 999) {
			value = 999;
		}
		const date = new Date().toLocaleString().split(',')[0];
		dispatch(bmiForm({ ...BMIData, [e.target.name]: e.target.value, date }));
		console.log("hello", BMIData)
	};

	const handleSubmit = () => {
		change(BMIData);
		// setState(initialValues);
		console.log("submiit")
		dispatch(setBmiData(BMIData))
	};

	return (
		<>
			<div className="row">
				<div className="col m6 s12">
					<label htmlFor="weight">Weight (in kg)</label>


					<input
						type="text"
						name="weight"
						min="1"
						max="999"
						placeholder="50"
						value={weight}
						onChange={handleChange} />
				</div>

				<div className="col m6 s12">
					<label htmlFor="height">Height (in cm)</label>
					<input
						type="text"
						name="height"
						min="1"
						max="999"
						placeholder="50"
						value={height}
						onChange={handleChange}
					/>

				</div>
			</div>
			<div className="center">
				<button
					id="bmi-btn"
					className="calculate-btn"
					type="button"
					disabled={weight === '' || height === ''}
					onClick={handleSubmit}
				>
					Calculate BMI
				</button>
			</div>
		</>
	);
};

BmiForm.propTypes = {
	change: PropTypes.func.isRequired
};

export default BmiForm;
