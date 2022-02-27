import React from "react";
import { Breadcrumb, BreadcrumbItem, CardImg, Navbar } from "reactstrap";
import { Link } from "react-router-dom";
import { CardImgOverlay, CardTitle } from "reactstrap";

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
            <div className="col-lg-6 col-md-6 col-sm-12">
              <CardImg src={dish.image} alt={dish.name} width="100%" />
              <CardImgOverlay>
                <CardTitle className="img_label">{dish.label}</CardTitle>
              </CardImgOverlay>
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
  const RenderComments = (props) => {
    if (!props) {
      return <div></div>;
    }
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
      </React.Fragment>
    );
  };

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
        <RenderComments comments={props.comments} />
      </div>
    </div>
  );
}

export default DishDetail;
