import React, { Component } from "react";
import Data from './data'
import './index.css'

class App extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      username:'',
      nickname:'',
      password:''
    }

    this.updateUsername = this.updateValue('username')
    this.updatePassword = this.updateValue('password')
    this.updateNickname = this.updateValue('nickname')

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
    let {username,nickname,password} = this.state
    Data.signup({username,nickname,password}).then((res)=>{
      console.log(res)
    })
  }

  render() {
    return <div className='container'>
    <div>
    用户名
    <input type="text" value={this.state.username} onChange={this.updateUsername}></input>
    </div>
    <div>
      昵称
    <input type="text" value={this.state.nickname} onChange={this.updateNickname}></input>
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
