import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import axios from "axios";
import AllGardens from './components/AllGardens';
import GardenDetail from './components/GardenDetail';
// const backendUrl =
//   process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/api";

class App extends Component {
  constructor() {
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

  // addPlant = (e) => {
  //   e.preventDefault();
  //   let gardenId = e.target.gardenId.value;
  //   axios
  //     .post('http://localhost:3000/api/gardens/:id/newplant', {
  //       name: e.target.name.value,
  //       gardenId: e.target.gardenId.value,
  //     })
  //     .then((response) => {
  //       // get the correct garden from this.state.gardens
  //       let updatedGarden = this.state.gardens.find((garden) => {
  //         return garden.id == gardenId;
  //       });

  //       // push the new plant to the Plant array
  //       updatedGarden.Plants.push(response.data.plant);
  //       console.log(updatedGarden);
  //       const newGardenArray = this.state.gardens.map((garden) => {
  //         if (garden.id == updatedGarden.id) {
  //           return updatedGarden;
  //         } else {
  //           return garden;
  //         }
  //       });
  //       // setState for the updated garden
  //       this.setState({
  //         gardens: newGardenArray,
  //       });
  //     });
  // };


  addGarden = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/api/gardens', {
        name: e.target.name.value,
      })
      .then((response) => {
        console.log(response);
        let tempArray = this.state.gardens;
        tempArray.push(response.data.garden);
        this.setState({
          gardens: tempArray,
        });
      });
  };

  updateGarden =  (e) => {
    e.preventDefault();
    let gardenId = parseInt(e.target.gardenId.value);
   axios.put('http://localhost:3000/api/gardens/' + gardenId, {
      name: e.target.name.value,
      id: gardenId
    })
    .then ((response) => {
      axios.get('http://localhost:3000/api/gardens').then((response) => {
      this.setState({
        gardens: response.data.gardens,
      })
      console.log(this.state.gardens)
    })

      // console.log(response)
      // let setGardens = ({
      //   gardens.map((garden, id) => {
      //     if (garden.id == this.updateGarden.id){
      //       return updatedGarden;
      //     } else {
      //       return garden;
      //     }
      //   })
      }

      )
    // });
    };


  render() {
    console.log(this.state.gardens)
    return (
      <div className="App">
        <header className="box">
          <h1>Famous Gardens</h1>
        </header> <br/>

        <div>
          <Link to="/">Home</Link>
        </div> 
        <div>
          <Link to="/gardens">Gardens Catalogue</Link>
        </div> <br/><br/>

        <Switch>
          <Route exact path='/gardens'>
            {/* <AllGardens gardens={this.state.gardens} /> */}
            <AllGardens gardens={this.state.gardens} addGarden={this.addGarden} />
          </Route>
          <Route
            path="/gardens/:id"
            component={(routerProps) => (
              <GardenDetail
                {...routerProps}
                gardens={this.state.gardens} updateGarden={this.updateGarden}
              />
            )}
          />
          {/* <Route
              path="/gardens/:id"
              component={(routerProps) => (
                <GardenDetail
                  {...routerProps}
                  gardens={this.state.gardens}
                  addPlant={this.addPlant}
                />
              )}
            /> */}

        </Switch>
            {/* <div className='fbox'> 
              <footer><h1>Footer</h1></footer>
            </div>  */}
      </div>
    );
  }
}

export default App;