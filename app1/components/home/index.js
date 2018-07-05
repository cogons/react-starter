import React, { Component } from "react";
import Data from './data'
import './index.css'

class App extends Component {
  constructor(props, context){
    super(props, context)
    this.state = {
      question:'',
      answers:[],
      myAnswer:'',
      date: this.props.match.params.date || '20180615'
    }

  }

  componentWillUpdate(nextProps){
    if(nextProps.match.params.date !== this.props.match.params.date){
      let date = nextProps.match.params.date || '20180615'
      this.refreshAll(date)
    }
  }

  componentDidMount(){
    let {date} = this.state
    this.refreshAll(date)
  }

  refreshAll = (date) => {
    Data.getQuestion(date).then((res)=>{
      this.setState({
        question:res.content
      })
    })
    Data.getAnswers(date).then((res)=>{
      this.setState({
        answers:res
      })
    })
  }

  updateMyAnswer = (e) => {
    this.setState({
      myAnswer: e.target.value
    })
  }

  handleSubmit = () => {
    let {myAnswer} = this.state
    let date = this.props.match.params.date || '20180615'
    Data.createAnswer(myAnswer,date).then((res)=>{
      console.log(res)
    })
  }

  render() {
    return <div className='container'>{this.state.question}
    <input type="text" value={this.state.myAnswer} onChange={this.updateMyAnswer}></input>
    <input type="submit" onClick={this.handleSubmit} ></input>
    {this.state.answers.map((ans,index)=>(
      <div key={index}>{ans.content}</div>
    ))}
    </div>;
  }
}

export default App;
