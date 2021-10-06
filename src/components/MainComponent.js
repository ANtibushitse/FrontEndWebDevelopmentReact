import React, {Component} from "react";
import {Navbar, NavbarBrand} from "reactstrap";
import Menu from "./components/MenuComponent.js";
import {DISHES} from "./shared/dishes";
import Dishdetail from "./DishdetailComponent"

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish:null
    };

  }
  onDishSelect(dish) {
    this.setState({selectedDish: dish});
  }
  render() {
    return (
      <div className="Main">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
        <Dishdetail dish={}/>
        <div className="row"></div>
      </div>
      
    );
  }
}
export default App;
