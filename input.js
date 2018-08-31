import React from 'react'

class Counter extends React.Component {
  state = {count: 0}
  handleClick = () => this.setState(({count}) => ({count: count + 1}))
  render() {
    return (
      <button
        id="counter"
        {...this.props}
      >
        {this.state.count}
      </button>
    )
  }
}

export {Counter}

