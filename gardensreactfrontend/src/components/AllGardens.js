import React, { Component } from "react";
import { Link } from "react-router-dom";
import './AllGardens.css';

class AllGardens extends Component {
    render() {
        const allGardens = this.props.gardens.map((garden) => {
            return (
                <div>
                    <div key={garden.id}>
                        <div className="container">
                            <Link to={`/gardens/${garden.id}`}>
                                <div className="centered">{garden.name}</div>
                                <img src={garden.img} /></Link>
                                <button key={`button-${garden.id}`}
                                id={garden.id}
                                onClick={() => this.props.deleteGarden(garden.id)} >
                                Delete </button>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div><br />
                {/* <h1> All Gardens</h1>   */}
                <h3>Create a New Garden</h3>
                <form onSubmit={this.props.addGarden}>
                    Garden Name: <input type="text" name="name" />
                    <input type="submit" value="Add Garden" />
                </form> <br /> <br />
                <div className="dispImage">
                    {allGardens}

                </div> <br />

            </div>
        );
    }
}

export default AllGardens;