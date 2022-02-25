import { Navbar, NavbarBrand } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import DishDetail from "./DishdetailComponent";
import Menu from "./MenuComponent";
import { DISHES } from "../share/dishes";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";

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
    return (
      <div className="App">
        <Header/>
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
        <Footer/>
      </div>
    );
  }
}

export default Main;
