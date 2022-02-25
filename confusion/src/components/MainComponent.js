import { Navbar, NavbarBrand } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import DishDetail from "./DishdetailComponent";
import Menu from "./MenuComponent";
import { DISHES } from "../share/dishes";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./HomeComponent";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    console.log(dishId);
    this.setState({ selectedDish: dishId });
  }
  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <DishDetail
          dishes={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
