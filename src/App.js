// create your App component here
import React, { Component } from 'react';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      peopleInSpace: []
    }
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(json => this.setState({peopleInSpace: json.people}))
  }

  makeLi(person){
    
    return <ul><li> {person.name}, Astronaut, is currently on the {person.craft} Space Craft</li></ul>
  }

  render(){
    return(
      <div>
        <div>Here are some Space Persons...</div>
        <br />
        <div>
          {this.state.peopleInSpace.map(person => this.makeLi(person))}
        </div>
      </div>
    )
  }
}