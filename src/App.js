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
    return <li>Space-person {person.name} is currently on the {person.craft}</li>
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