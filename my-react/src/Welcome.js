import React from 'react'

class Welcome extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      count: 1
    }
    setInterval( () => {

        this.setState(increment)
        this.setState({
          date: new Date()
        })

    }, 1000)
    function increment(state, props) {
      return {
        count: state.count + 1,
        name: 'yyy'
      };
    }
    console.log('初始化数据');
  }

  componentWillMount() {
    console.log("即将刷新")
  }

  render() {
    console.log("刷新")
    return (
        <div>
          <h1>Hello, {this.props.name}</h1>
          <h1>Hello, {this.state.count}</h1>
          <h2>{this.state.date.toString()}</h2>
        </div>
    )
  }

  componentDidMount() {
    console.log('刷新完成')
  }
}

// function Welcome(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

// 为什么要 default
export default Welcome