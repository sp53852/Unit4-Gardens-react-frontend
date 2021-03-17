import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Button from 'react-bootstrap/Button'

class GardenDetail extends Component {
    render() {
        const gardenDetail = this.props.gardens.find((garden) => {
            return garden.id == this.props.match.params.id;
        });
        const gardenPlants = gardenDetail.Plants.map((plant) => {
            return <div key={plant.id}>
                <div className="container">
                    <div className="centered">{plant.name}</div>
                    {/* <img src={plant.img} /> */}
                    <div className="pics"><Image className='allgardenpics' src={plant.img} thumbnail /></div>
                </div>
            </div>;
        });

        return (
            <div>
                <br />
                <form onSubmit={(e) => this.props.updateGarden(e)}>
                    <input type="text" name="name" placeholder={gardenDetail.name} />
                    <input type="hidden" name="gardenId" value={gardenDetail.id} />
                    {/* <input type="submit" value="Update Garden" /> */}
                    <Button type="submit" variant="primary" size="sm">Update Garden</Button>{' '}
                </form> <br /><br /><br />
                <h3>Some of <span>{gardenDetail.name}</span> Plant Varieties</h3> <br />

                {/* <h5>Add a New Plant</h5>
                    <form onSubmit={this.props.addPlant}>
                    <input type="hidden" name="gardenId" value={gardenDetail.id} />
                    Plant Name: <input type="text" name="name" />
                    <input type="submit" value="Add Plant" />
                    </form> */}
                <div className="dispImage">{gardenPlants}</div>
            </div>
        );
    }
}
export default GardenDetail;