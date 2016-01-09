import React from "react";
import Invoice from "../invoice/invoice";
import Pizza from "../pizza/pizza";
import PizzaService from "../pizza/pizza.service";

class Menu extends React.Component {

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

    renderPizzaList(pizza, index) {
        return <Pizza pizza={pizza} key={index}  />;
    }

    render() {


        return (
            <div className="pizza-menu">
                <div>
                    <ul>
                        {this.state.pizzas.map((pizza, index) => {
                            return <Pizza pizza={pizza} key={index} addToOrder={this.addOrder.bind(this)} />
                        })}
                    </ul>
                </div>
                <Invoice orders={this.state.order}  />
            </div>
        );
    }
}

Menu.PropTypes = { url: React.PropTypes.string };
Menu.defaultProps = { url: "/api/pizzas" };

export default Menu;

