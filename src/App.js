import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person'
import "bulma";
import UserInput from './components/UserInput/UserInput'
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {
  state = {
    persons : [
      {
        id:1,
        name:'jesus',
        age:'20'
      },
      {
        id:2,
        name:'corey_m_schafer',
        age:'35'
      },
      {
        id:3,
        name:'max',
        age:28
      }
    ],
    useroutput :[
      {
        id:1,
        someoutput:'output one'
      },
      {
        id:2,
        someoutput:'output two'
      },
      {
        id:3,
        someoutput : 'output three'
      }
    ]
  }
// IN abve there is othervalue but when using setState, it updates the persons object and automatically merges the othervalue but its not the case when using
// functional hooks useState, so you have to have multiple useState hooks for every element in state object
  giveAlert = (name) => {
    const required_person_id = this.state.persons.filter((person)=>person.name===name)[0]
    const index_number = this.state.persons.indexOf(required_person_id)
    const required_person_clone = {...this.state.persons[parseInt(index_number,10)]}
    required_person_clone.name = required_person_clone.name===name.toUpperCase()?name.toLowerCase():name.toUpperCase()
    const all_deep_copy = [...this.state.persons]
    all_deep_copy[parseInt(index_number,10)] = required_person_clone
    this.setState({persons:all_deep_copy})
    }

    nameChangedHandler = (event,name)=>{
      const required_person_id = this.state.persons.filter((person)=>person.name===name)[0]
      const index_number = this.state.persons.indexOf(required_person_id)
      const required_person_clone = {...this.state.persons[parseInt(index_number,10)]}
      required_person_clone.name = event.target.value
      const all_deep_copy = [...this.state.persons]
      all_deep_copy[parseInt(index_number,10)] = required_person_clone
      this.setState({persons:all_deep_copy})
          }

    someoutputChangeHandler = (event)=>{
          const all_deep_copy = [...this.state.useroutput]
          all_deep_copy.forEach((item)=>{
            item.someoutput=event.target.value;
          });
          this.setState({someoutput:all_deep_copy})
    }


  render() {
    return (
      <div className="App container">
        <h1 className='m-2 p-1 title'>Hi i am a react app</h1>
        <div className="container">
      {this.state.persons.map((person)=> <div className="box" >
        <a className="button is-primary" onClick={()=>this.giveAlert(person.name)}>Capitalize Name</a>
        <Person key={person.name} change={(e)=>this.nameChangedHandler(e,person.name)}  click = {()=>this.giveAlert(person.name)} name={person.name} age={person.age}>
          </Person>
          </div>)}
          <div className="box">
          <UserInput default = {this.state.useroutput[0].someoutput} change={(e)=>this.someoutputChangeHandler(e)} />
          {this.state.useroutput.map((userop)=>
          <UserOutput key={userop.id} someoutput={userop.someoutput}/>)}
        </div>
    </div>
      </div>
    );
  }
}

export default App;
