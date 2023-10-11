import React from "react"

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'Ben', color: 'red'};
    }

    static getDerivedStateFromProps = (props, state) => {
        return { name: props.name }
    }

    changeState = () => {
        this.state.color ==='red' ? this.setState({color: 'blue'}) : this.setState({color: 'red'});
    }

    // shouldComponentUpdate = () => {
    //     return false
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Before the update, the favorite was " + prevState.color);
        return null
      }
      componentDidUpdate() {
        console.log("The updated favorite is " + this.state.color);
      }

    render() {
        return(<h1>Hello, {this.props.description} {this.state.color} Class Component of {this.props.name} <br /> <button onClick={this.changeState}>Click</button></h1>)
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({color: 'green'})
        }, 1000)
    }
}

export default Hello 