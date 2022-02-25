import React from "react";
import { Navbar, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function DishDetail(prop) {
  const dish = prop.dishes;
  const RenderDish = () => {
    return (
      <React.Fragment>
        <Navbar dark color="primary">
          <div className="container">
            <Navbar href="/">
              <h5>Dish Detail</h5>{" "}
            </Navbar>
          </div>
        </Navbar>
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6 col-sm-12">
              <CardImg src={dish.image} alt={dish.name} width="100%" />
              <CardImgOverlay>
                <CardTitle className="img_label">{dish.label}</CardTitle>
              </CardImgOverlay>
            </div>
            <div className="col-3 col-md-6 col-sm-12">
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
  const RenderComment = () => {
    if (!dish) {
      return <div></div>;
    }
    console.log(dish)

    const Comments = dish.comments;
    return (
      <React.Fragment>
        <h5>Comments :</h5>

        {Comments.map((comment) => (
          <div key={comment.id} className="Comment">
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
  const Render = () => {
    if (dish) {
      return (
        <React.Fragment>
          <RenderDish />
          <RenderComment />
        </React.Fragment>
      );
    }
    return <div></div>;
  };
  return <Render />;
}

export default DishDetail;
