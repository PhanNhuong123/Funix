import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardImg,
  Col,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Navbar,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { CardImgOverlay, CardTitle } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";

function DishDetail(props) {
  if (!props.dish) {
    return <div></div>;
  }
  const RenderDish = (prop) => {
    if (!prop) {
      return <div></div>;
    }
    const dish = prop.dish;

    console.log(dish);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12">
              <Card>
                <CardImg src={dish.image} alt={dish.name} width="100%" />
                <CardImgOverlay>
                  <CardTitle className="img_label">{dish.label}</CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h4>{dish.name}</h4>
              <p>
                Category :{" "}
                <b>
                  <i>{dish.category}</i>
                </b>
              </p>
              <p>
                <b>
                  <i>{dish.description}</i>
                </b>
              </p>
              <p>
                Price :{" "}
                <b>
                  <i>{dish.price}</i>
                </b>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
  function RenderComments({ comments, addComment, dishId }) {
    if (comments != null) {
      const comments = props.comments;
      console.log(comments);

      return (
        <React.Fragment>
          <h5>Comments :</h5>

          {comments.map((comment) => (
            <div key={comment.id} className="Comment col-lg-6 col-md-6 col">
              <p>
                <b>
                  <i>{comment.author}</i>
                </b>
              </p>
              <p>
                <i>{comment.comment}</i>
              </p>
              <i>
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </i>
            </div>
          ))}
          <CommentForm dishId={dishId} addComment={addComment} />
        </React.Fragment>
      );
    } else {
      return <div></div>;
    }
  }

  class CommentForm extends Component {
    constructor(props) {
      super(props);

      this.toggleModal = this.toggleModal.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = {
        isNavOpen: false,
        isModalOpen: false,
      };
    }

    toggleModal() {
      this.setState({ isModalOpen: !this.state.isModalOpen });
    }
    handleSubmit(values) {
      this.toggleModal();
      console.log(this.props);
      console.log(JSON.stringify(values));
      this.props.addComment(
        this.props.dishId,
        values.rating,
        values.author,
        values.comment
      );
    }
    render() {
      return (
        <div>
          <Button outline onClick={this.toggleModal}>
            <i class="fa fa-pencil"> Submit Comment</i>
          </Button>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row>
                  <Label md={3} htmlFor="rating">
                    Rating
                  </Label>
                  <Col md={12}>
                    <Control.select
                      model={".rating"}
                      id="rating"
                      name="rating"
                      className="form-control"
                    >
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row>
                  <Label md={3} htmlFor="author">
                    Your Name
                  </Label>
                  <Col md={12}>
                    <Control.text
                      model={".author"}
                      id="author"
                      name="autor"
                      placeholder="Your Name"
                      className="form-control"
                    />
                  </Col>
                </Row>
                <Row>
                  <Label md={3} htmlFor="comment">
                    Comment
                  </Label>
                  <Col md={12}>
                    <Control.textarea
                      model={".comment"}
                      id=".comment"
                      name=".comment"
                      className="form-control"
                      rows="6"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Button type="submit" color="primary">
                      Send
                    </Button>
                  </Col>
                </Row>
              </LocalForm>
            </ModalBody>
          </Modal>
        </div>
      );
    }
  }

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-lg-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <RenderDish dish={props.dish} />
      </div>
      <div className="row">
        <RenderComments
          comments={props.comments}
          addComment={props.addComment}
          dishId={props.dish.id}
        />
      </div>
    </div>
  );
}

export default DishDetail;
