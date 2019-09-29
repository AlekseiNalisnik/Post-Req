import React, { Component } from 'react';

import { createUser, getUsers } from '../sources/Users';
import Axios from 'axios';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            name: '',
            surname: '',
            phoneNumber: '',
            email: '',
            age: ''
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('This state - ', this.state);

        createUser(this.state)
            .then(res => {
                console.log('res - ', res);
                Axios.get('/user')
                .then((res) => {
                    console.log('Response - ', res);
                })
                .catch(e => console.log(e));
            })
            .catch(error => {console.log(error)});
    }

    changeHandler(e) {
        let arg = e.target.name;
        console.log(typeof([arg]));
        return this.setState({[arg]: e.target.value});
    }

    render() {

        const { name, surname, phoneNumber, email, age } = this.state;

        return (
            <form onSubmit={this.onSubmit} method="post" action="/user">
                <label>
                    Имя
                    <input type="text" name="name" value={name} onChange={this.changeHandler} />
                </label>

                <label>
                    Фамилия
                    <input type="text" name="surname" value={surname} onChange={this.changeHandler} />
                </label>

                <label>
                    Телефон
                    <input type="number" name="phoneNumber" value={phoneNumber} onChange={this.changeHandler} />
                </label>
                
                <label>
                    Email
                    <input type="email" name="email" value={email} onChange={this.changeHandler} />
                </label>

                <label>
                    Возраст
                    <input type="number" name="age" value={age} onChange={this.changeHandler} />
                </label>

                <button>Сохранить</button> 
                {/* в button type="submit" идёт по дефолту */}
            </form>
        );
    }
}

export default Form;