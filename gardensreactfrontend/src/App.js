import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import axios from "axios";
import AllGardens from './components/AllGardens';
import GardenDetail from './components/GardenDetail';

class App extends Component {
  constructor(){
    super();
    this.state = {
      gardens: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/gardens').then((response) => {
      this.setState({
        gardens: response.data.gardens,       
      })
      console.log(this.state.gardens)
    })
  }



  render() {
    console.log(this.state.gardens)
    return (
      <div className="App">
        <header>
          <h1>Famous Gardens Tour</h1>
        </header>

        <nav>
          <Link to="/">Home</Link> <br /> <br />
          <Link to="/gardens">Gardens Catalogue</Link>
        </nav>
        <Switch>
        <Route exact path='/gardens'>
            <AllGardens gardens={this.state.gardens} />
          </Route>
          <Route
              path="/gardens/:id"
              component={(routerProps) => (
                <GardenDetail
                  {...routerProps}
                  gardens={this.state.gardens}
                  addPlant={this.addPlant}
                />
              )}
            />
          
          </Switch>
          
      </div>
    );
  }
}

export default App;