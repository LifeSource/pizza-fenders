import React from "react";
import PizzaList from "../pizza/pizzaList";
import Invoice from "../invoice/invoice";

class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="pizza-menu">
                <PizzaList url={this.props.url} />
                <Invoice />
            </div>
        );
    }
}

Menu.PropTypes = { url: React.PropTypes.string };
Menu.defaultProps = { url: "/api/pizzas" };

export default Menu;

