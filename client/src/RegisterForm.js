import React, { Component } from 'react';
import axios from 'axios';
import './register.css';

export default class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.initialState = {
			name: '',
			email: '',
			phone: '',
			age: 0,
			gender: '',
			languages: [],
			date: '',
			password: '',
			homepage: '',
		};

		this.state = this.initialState;
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onReset = this.onReset.bind(this);
	}

	onChangeHandler(event) {
		if (event.target.name === 'languages') {
			if (event.target.checked) {
				this.setState({ languages: [...this.state.languages, event.target.value] });
			} else {
				let languages = this.state.languages.filter((l) => l !== event.target.value);
				this.setState({ languages });
			}
		} else {
			this.setState({ [event.target.name]: event.target.value });
		}
	}

	onSubmit(event) {
		event.preventDefault();
		console.log(this.state);
		axios
			.post('/save', this.state)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	onReset() {
		this.setState(this.initialState);
	}

	render() {
		return (
			<div className='container'>
				<header className='header'>
					<h1 id='title' className='text-center'>
						Bootcamp Registration Form
					</h1>
				</header>
				<form onSubmit={this.onSubmit}>
					<div className='form-group'>
						<label id='name-label' htmlFor='name'>
							Name
						</label>
						<input
							type='text'
							name='name'
							id='name'
							className='form-control'
							placeholder='Enter your name'
							value={this.state.name}
							onChange={this.onChangeHandler}
						/>
					</div>
					<div className='form-group'>
						<label id='email-label' htmlFor='email'>
							Email
						</label>
						<input
							type='email'
							name='email'
							id='email'
							className='form-control'
							placeholder='Enter your Email'
							value={this.state.email}
							onChange={this.onChangeHandler}
						/>
					</div>
					<div className='form-group'>
						<label id='phone-label' htmlFor='phone'>
							Phone
						</label>
						<input
							type='tel'
							name='phone'
							id='phone'
							className='form-control'
							placeholder='Enter your Phone no'
							value={this.state.phone}
							onChange={this.onChangeHandler}
						/>
					</div>
					<div className='form-group'>
						<label id='age-label' htmlFor='age'>
							Age
						</label>
						<input type='range' name='age' id='age' value={this.state.age} min='0' max='100' onChange={this.onChangeHandler} />
						<p>{this.state.age}</p>
					</div>

					<div className='form-group'>
						<p>Gender</p>
						<label>
							<input name='gender' value='male' type='radio' className='input-radio' onChange={this.onChangeHandler} />
							Male
						</label>

						<label>
							<input name='gender' value='female' type='radio' className='input-radio' onChange={this.onChangeHandler} />
							Female
						</label>
					</div>

					<div className='form-group'>
						<p>
							Laguages
							<span className='clue'>(Check all that apply)</span>
						</p>

						<label>
							<input
								name='languages'
								value='React'
								type='checkbox'
								className='input-checkbox'
								onChange={this.onChangeHandler}
							/>
							React
						</label>
						<label>
							<input
								name='languages'
								value='Nodejs'
								type='checkbox'
								className='input-checkbox'
								onChange={this.onChangeHandler}
							/>
							NodeJs
						</label>
						<label>
							<input
								name='languages'
								value='Javascript'
								type='checkbox'
								className='input-checkbox'
								onChange={this.onChangeHandler}
							/>
							Javascript
						</label>
					</div>
					<div className='form-group'>
						<label id='date-label' htmlFor='date'>
							Birth Date
						</label>
						<input
							type='date'
							name='date'
							id='date'
							placeholder='Enter your Birth Date'
							value={this.state.date}
							className='form-control'
							onChange={this.onChangeHandler}
						/>
					</div>
					<div className='form-group'>
						<label id='homepage-label' htmlFor='homepage'>
							Homepage
						</label>
						<input
							type='url'
							name='homepage'
							id='homepage'
							className='form-control'
							placeholder='Enter your homepage'
							value={this.state.homepage}
							onChange={this.onChangeHandler}
						/>
					</div>
					<div className='form-group'>
						<label id='password-label' htmlFor='password'>
							Password
						</label>
						<input
							type='password'
							name='password'
							id='password'
							placeholder='Enter your password'
							value={this.state.password}
							className='form-control'
							onChange={this.onChangeHandler}
						/>
					</div>
					<div className='form-group'>
						<input type='submit' id='submit' className='submit-button' value='Submit' />
						<input type='reset' id='reset' className='reset-button' value='Reset' onClick={this.onReset} />
					</div>
				</form>
			</div>
		);
	}
}
