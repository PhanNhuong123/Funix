import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import DishDetail from "./DishdetailComponent";
import Menu from "./MenuComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { connect } from "react-redux";
import { addComment, fetchDishes } from "../redux/ActionCreator";

const mapStateToProps = state => {
  console.log("state to props : ",state)
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  }
}
const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())}
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  
  componentDidMount() {
    this.props.fetchDishes();
  }

  // onDishSelect(dishId) {
  //   console.log(dishId);
  //   this.setState({ selectedDish: dishId });
  // }
  render() {
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment={this.props.addComment}
          />
      );
    };
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        {/* <Menu
          dishes={this.props.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        /> */}
        <DishDetail
          dishes={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === this.props.selectedDish
            )[0]
          }
        />
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
