import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './scss/styles.scss'

class Count extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.interval = null
  }

  componentDidMount() {
    let count = 0
    this.interval = window.setInterval(() => {
      this.setState({ count: count })
      count++
    }, 1000)
  }

  componentWillUnmount () {
    window.clearInterval(this.interval)
  }

  render() {
    const { count } = this.state

    return <span> Count {count} </span>
  }
}

class App extends Component {
  state = {
    showCount: true
  }

  handleMount = () => {
    this.setState({ showCount: false })
  }

  render () {
    const { showCount } = this.state
    return (
      <div>
        <button onClick={this.handleMount}>Unmount Count</button>
        {
          showCount ? (<Count />) : (<h1>Count no esta disponible</h1>)
        }
      </div>
    )
  }
}


const root = document.getElementById('root')

ReactDOM.render(<App />, root)
