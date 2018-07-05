import React, { Component } from "react";
import Data from './data'
import './index.css'

class App extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      answers:[]
    }

  }
  componentDidMount(){
    Data.getMine().then((res)=>{

      this.setState({
        answers:res
      })

    })
  }
  render() {
    return <div className='container'>
    {this.state.answers.map((ans,index)=>(
      <div key={index}>{ans.content}</div>
    ))}
    </div>;
  }
}

export default App;
