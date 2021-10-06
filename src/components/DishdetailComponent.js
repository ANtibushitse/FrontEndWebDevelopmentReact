import React, {Component} from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
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
  /* render date  !
  !todo render the date with intl format*/
  renderComments(comments) {
    const com = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <div className="container">
            <div className="row">
              <p class="text-left">{comment.comment}</p>
            </div>
            <div className="row">
              <p class="text-left">
                -- &nbsp;{comment.author},
               {new Intl.DateTimeFormat('fr-FR', {year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse({comment.date})))}
              </p>
            </div>
            <br />
          </div>
        </li>
      );
    });

    return <ul className="list-unstyled">{com}</ul>;
  }
  render() {
    let comments = null;
    if (this.props.selectedDish != null) {
      comments = this.props.selectedDish.comments;
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">{this.renderDish(this.props.selectedDish)}</div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4> {this.renderComments(comments)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }

    // props est une suite de variable, l'ensemble des propriÃ©tÃ©es du component
  }
}

export default Dishdetail;