import React from "react";
import PizzaList from "../pizza/pizzaList";
import Invoice from "../invoice/invoice";

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { order: [] };
    }

    render() {

        return (
            <div className="pizza-menu">
                <PizzaList order={this.state.order} />
                <Invoice order={this.state.order} />
            </div>
        );
    }
}

Menu.PropTypes = { url: React.PropTypes.string };
Menu.defaultProps = { url: "/api/pizzas" };

export default Menu;

