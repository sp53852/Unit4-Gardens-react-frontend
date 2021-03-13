import React, { Component } from "react";
import { Link } from "react-router-dom";
import './AllGardens.css';

class AllGardens extends Component {
    render() {
        const allGardens = this.props.gardens.map((garden) => {

            return (
                <div>
                    <div key={garden.id}>
                        <Link to={`/gardens/${garden.id}`}>{garden.name}<img src={garden.img} /></Link>
                    </div>
                </div>
            );
        });


        return (
            <div>
                <h1>All Gardens</h1> <br /> 
                <div>
                {allGardens}
                </div> <br /><br />
                <h3>Create a New Garden</h3>
                <form onSubmit={this.props.addGarden}>
                    Garden Name: <input type="text" name="name" />
                    <input type="submit" value="Add Garden" />
                </form> <br /> <br />
            </div>
        );
    }
}

export default AllGardens;