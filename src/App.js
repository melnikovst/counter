import React from 'react'
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.reset = props.counter
    this.state = {
      num: props.counter
    }
  }

  getRnd = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  rndBtn = () => {
    this.setState({
      num: this.getRnd(-50, 50)
    })
  }

  resetBtn = () => {
    this.setState({
      num: this.reset
    })
  }

  nextNum = () => {
    const { num } = this.state;
    (num >= 50) ? this.setState({
      num: num
    })
      : this.setState({
        num: num + 1
      })
  }

  prevNum = () => {
    const { num } = this.state;
    (num <= -50) ? this.setState({
      num: num
    }) : this.setState({
      num: num - 1
    })
  }

  render() {
    const { num } = this.state;
    return (
      <div className="app">
        <div className="counter">{num}</div>
        <div className="controls">
          <button onClick={this.nextNum}>INC</button>
          <button onClick={this.prevNum}>DEC</button>
          <button onClick={this.rndBtn}>RND</button>
          <button onClick={this.resetBtn}>RESET</button>
        </div>
      </div>
    )
  }
}
