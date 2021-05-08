import React, {Component} from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  renderDish(dish) {
    // make sure the selected dish is an existing dish
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">{this.renderDish(this.props.selectedDish)}</div>
        <div className="col-12 col-md-5 m-1">comment</div>
      </div>
    );

    // props est une suite de variable, l'ensemble des propriétées du component
  }
}

export default Dishdetail;
