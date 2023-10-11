import React from "react";

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {count: 0};
        this.counter = this.counter.bind(this);
    }

    counter = () => {
       this.setState(({count}) => ({count: count+1}))
    }

    render() {
        if(this.state.count === 3) {
            throw new Error('Error occured')
        } 
        return <h1 onClick={this.counter}>{this.state.count}</h1>
    }
}

export default Counter