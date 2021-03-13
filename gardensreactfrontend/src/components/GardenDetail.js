import React, { Component } from "react";

class GardenDetail extends Component {
  render() {
    const gardenDetail = this.props.gardens.find((garden) => {
      return garden.id == this.props.match.params.id;
    });
    const gardenPlants = gardenDetail.Plants.map((plant) => {
      return <div key={plant.id}>{plant.name}<img src={plant.img} /></div>;
    });

    return (
      <div>
        <h3>{gardenDetail.name}</h3>
        <h5>Add a New Plant</h5>
        <form onSubmit={this.props.addPlant}>
          <input type="hidden" name="gardenId" value={gardenDetail.id} />
          <input type="text" name="name" />
          <input type="submit" value="Add Plant" />
        </form>
        <ul>{gardenPlants}</ul>
      </div>
    );
  }
}

export default GardenDetail;
