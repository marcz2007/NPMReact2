import React, {Component} from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import DishDetail from './components/DishdetailComponent';
import Cats from './components/FooterComponent';
import './App.css';
import { DISHES} from "./Shared/dishes";



class App extends Component {
// in order to store the state youo must define the state
    // in the constructor
    constructor(props){
        super(props);

        this.state = {
            dishes : DISHES
        }
    }
  render() {
    return (
        <div className="App">
            <Navbar dark color={"primary"}>
                <div className={"container"}>
                    <NavbarBrand hred={"/"}> Ristorante Con Fusion </NavbarBrand>
                </div>
            </Navbar>
            {/*// Dishes defined in the state from app component is now*/}
            {/*// available in Menu component.*/}
            <Menu dishes = {this.state.dishes}/>
            <DishDetail dishes = {this.state.dishes}/>
            {/*//<Cats/>*/}
        </div>
    );
  }

}

export default App;
