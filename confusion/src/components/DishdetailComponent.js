import React from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navbar, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function DishDetail(prop) {
  if (!prop) {
    return <div></div>;
  }
  console.log(prop)

  const dish = prop.dish;
  console.log(dish)

  if (!dish){return (<div></div>)}
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
  const Comments = dish.comments;
  const RenderComments = () => {
  
    console.log(dish)

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
 
    
      return (
        <div className="container">
        <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={Comments} />
            </div>
        </div>
        </div>
      )

}

export default DishDetail;
