import React, { Component } from "react";
import Data from './data'
import './index.css'

class App extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      username:'',
      password:''
    }

    this.updateUsername = this.updateValue('username')
    this.updatePassword = this.updateValue('password')

  }
  componentDidMount(){
    
  }

  updateValue = (key) => {
    return (e)=>{
      this.setState({
      [key]:e.target.value
    })
  }
  }

  handleSubmit = () =>{
    let {username,password} = this.state
    let {history} = this.props
    Data.signin({username,password}).then((res)=>{
      window.isLogin = true
      console.log(history)
      history.push("/")
    })
  }

  render() {
    return <div className='container'>
    <div>
    用户名
    <input type="text" value={this.state.username} onChange={this.updateUsername}></input>
    </div>
    <div>
      密码
    <input type="text" value={this.state.password} onChange={this.updatePassword}></input>
    </div>
    <input type="submit" onClick={this.handleSubmit} ></input>
    </div>;
  }
}

export default App;
