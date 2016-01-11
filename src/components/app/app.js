import React from "react";
import Invoice from "../invoice/invoice";
import Pizza from "../pizza/pizza";
import PizzaList from "../pizza/pizzaList";
import PizzaService from "../pizza/pizza.service";
import _ from "lodash";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.pizzaService = new PizzaService();

        this.state = { 
            pizzas: [],
            order: { items: [] , total: 0 }
        };
    }

    addOrder(pizza) {

        const items = this.state.order.items;
        var item = { name: pizza.name, price: pizza.price, qty: 1 };
        var exist = _.find(items, { name: pizza.name });
        
        if (!exist) {
            items.push(item);
            this.updateState(items);
        } else {
            var index = items.indexOf(exist);
            items[index].qty += 1;
            this.updateState(items);
        }
    }

    updateState(items) {
        this.setState({
            order: {
                items: items,
                total: this.calculateTotal(this.state.order.items)
            }
        });
    }

    calculateTotal(items) {

        const gst = 1.1;
        let total = 0;

        for (let i = 0; i < items.length; i++) {
            total += items[i].qty * items[i].price;
        }

        return total * gst;
    }

    componentDidMount() {
        this.pizzaService
            .getAll(this.props.url)
            .then((data) => this.setState({ pizzas: data}))
            .catch((error) => console.error("Error: ", error));
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
