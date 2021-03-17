import React, { Component } from "react";
import { Link } from "react-router-dom";
import './AllGardens.css';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

class AllGardens extends Component {
    render() {
        const allGardens = this.props.gardens.map((garden) => {
            return (
                <div>
                    <div key={garden.id}>
                        <div className="container">
                            <Link to={`/gardens/${garden.id}`}>
                                <div className="centered">{garden.name}</div>
                                {/* {<img src={garden.img}/> } */}
                                <div className="pics"><Image className='allgardenpics' src={garden.img} thumbnail /></div>
                            </Link>
                            <div className="btndelete">
                                {/* <button key={`button-${garden.id}`}id={garden.id}
                                onClick={() => this.props.deleteGarden(garden.id)} >
                                Delete </button>  */}
                                <Button key={`button-${garden.id}`}
                                    id={garden.id}
                                    onClick={() => this.props.deleteGarden(garden.id)} variant="primary" size="sm">
                                    Delete
                                </Button>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div><br />
                <h5>Create a New Garden</h5>
                <form onSubmit={this.props.addGarden}>
                    Garden Name: <input type="text" name="name" />
                    {/* <input type="submit" value="Add Garden" /> */}
                    <Button type="submit" variant="primary" size="sm">Add Garden</Button>{' '}
                </form> <br /> <br />
                <div className="dispImage">
                    {allGardens}
                </div> <br />

            </div>
        );
    }
}

export default AllGardens;