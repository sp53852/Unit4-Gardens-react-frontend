import React, { Component } from "react";
// import './GardenDetail.css';

class GardenDetail extends Component {
    render() {
        const gardenDetail = this.props.gardens.find((garden) => {
            return garden.id == this.props.match.params.id;
        });
        const gardenPlants = gardenDetail.Plants.map((plant) => {
            return <div key={plant.id}>
                <div className="container">
                    <div className="namecentered">
                        {plant.name}
                    </div>
                    <img src={plant.img} />
                </div>
            </div>;
        });

        return (
            <div>
                <h3>Some of {gardenDetail.name} Plants</h3> <br /><br />
                {/* <h5>Add a New Plant</h5>
                    <form onSubmit={this.props.addPlant}>
                    <input type="hidden" name="gardenId" value={gardenDetail.id} />
                    Plant Name: <input type="text" name="name" />
                    <input type="submit" value="Add Plant" />
                    </form> */}
                <div className="dispImage">{gardenPlants}
                </div>
            </div>
        );
    }
}

export default GardenDetail;
