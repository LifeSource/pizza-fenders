import React from "react";
import Pizza from "./pizza";
import PizzaService from "./pizza.service";

class PizzaList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pizzas: [] };
        this.pizzaService = new PizzaService();
    }

    componentDidMount() {
        this.pizzaService.get(this.props.url)
            .then((data) => this.setState({ pizzas: data }))
            .catch((error) => console.error(error));
    }

    render() {

        return(
            <div>
                {this.state.pizzas.map((pizza, index) => {
                   return(<Pizza pizza={pizza} key={index}/>);
                })}
            </div>
        );
    }
}

PizzaList.PropType = { url: React.PropTypes.string };
PizzaList.defaultProps = { url: "/api/pizzas" };

export default PizzaList;

