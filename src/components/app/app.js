import React from "react";
import Invoice from "../invoice/invoice";
import Pizza from "../pizza/pizza";
import PizzaList from "../pizza/pizzaList";
import PizzaService from "../pizza/pizza.service";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.pizzaService = new PizzaService();

        this.state = { 
            order: {
                items: [],
                total: 0
            },
            pizzas: [] 
        };
    }

    addOrder(pizza) {

        if (!this.alreadyInOrder(pizza)) {
            this.setState({ 
                order: {
                    items: this.state.order.items.concat(pizza),
                    total: this.calculateTotal(pizza.price)
                }
            });
        } else {
            this.setState({
                order: {
                    items: this.state.order.items,
                    total: this.calculateTotal(pizza.price)
                }
            });
        }
        
    }

    alreadyInOrder(pizza) {
        return !(this.state.order.items.indexOf(pizza) === -1);
    }

    calculateTotal(pizzaPrice) {
        const gst = 1.1;
        return (this.state.order.total += pizzaPrice) * gst;  
    }

    componentDidMount() {
        this.pizzaService
            .getAll(this.props.url)
            .then((data) => this.setState({ pizzas: data}))
            .catch((error) =>  console.log("Error: ", error));
    }

    render() {

        return (
            <div>
                <div className="pizza-menu">
                    <PizzaList addToOrder={this.addOrder.bind(this)} />
                    <Invoice orders={this.state.order}  />
                </div>
            </div>
        );
    }
}

App.PropTypes = { url: React.PropTypes.string };
App.defaultProps = { url: "/api/pizzas" };
