import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { baseUrl } from "../share/baseURL";
import { Loading } from "./LoadingComponent";

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return (
      <Card>
        <CardImg src={ baseUrl + item.image} alt={baseUrl + item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? (
            <CardSubtitle>{item.designation}</CardSubtitle>
          ) : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
}

function Home(props) {
  if (props.promotionsLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.promotionsErrMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (!props.dish) {
    return <div></div>;
  }
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md-5 col-lg-5">
          <RenderCard
            item={props.dish}
            isLoading={props.dishesLoading}
            errMess={props.dishesErrMess}
          />
        </div>
        <div className="col-12 col-md-5 col-lg-5 ">
          <RenderCard item={props.promotion} />
        </div>
        <div className="col-12 col-md-5 col-lg-5">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}

export default Home;
