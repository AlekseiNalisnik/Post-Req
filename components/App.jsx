import React, {Component} from 'react';

import List from './List';

import Form from './Form';

import {getList} from '../sources/list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            user: [],
            count: 6
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        const { target } = e;

        this.setState({count: target.value});
    }

    // перерендер из-за setState()
    componentDidMount() {
        // console.log('DIDMOUNT');
        getList({count: this.state.count})
            .then(({data}) => this.setState({list: data}));
    }

    componentDidUpdate(prevProps, prevState) {

        if(prevState.count !== this.state.count) {
            // console.log('NOT EQUAL!');
            console.log('DIDUPDATE');
            getList({count: this.state.count})
                .then(({data}) => this.setState({list: data}));
        }
        
        // жизненный цикл компонентов
        // console.log('DIDUPDATE');
        // console.log('did update prevstate: ', prevState); // возвращает state, находящийся ан уровне предыдущего рендера
        // prevProps - возвращает props, находящийся ан уровне предыдущего рендера
        // console.log('did update this.state: ', this.state);
        // если тут вызвать this.setState(), то он будет выполняться бесконечно, 
        // потому что обновляется при изменении компонента, а изменяет сам себя 
        // this.setState({count: 0})
    }

    render() {
        // const {list} = this.state;
        // const {onInputChange} = this;

        return (
            <div>
                {/* <input type='number' placeholder="counter here" onChange={onInputChange} />
                <List list={list}/> */}
                <Form />
            </div>
        );
    }
}

export default App;
