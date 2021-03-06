import React, {Component} from "react";
import {Navbar, NavbarBrand} from "reactstrap";
import "./App.css";
import Menu from "./components/MenuComponent.js";
import {DISHES} from "./shared/dishes";
/* 
!todo delet the props */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />

        <div className="row"></div>
      </div>
    );
  }
}
export default App;
