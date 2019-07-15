
import React, {Component} from "react";
import ItemCard from "./card";

class Wrapper extends Component {

    constructor(props) {
        super(props);
        this.id = 0;
        this.state = {
            data: [
            // <ItemCard title="LavaVtase" oldPrice="68" newPrice ="35" id={this.id}/>,
            // <ItemCard title="LavaVtase" oldPrice="68" newPrice ="35" id={this.id+1}/>,
            // <ItemCard title="LavaVtase" oldPrice="68" newPrice ="35"/>
            ]
        };
        //Бинд ивэнта клик к этому компоненту
        this.handleClick = this.handleClick.bind(this);
        this.handleClickRemove = this.handleClickRemove.bind(this);
    }

    // Передача объекта (инпуты) со всеми собственными пропертями и валью
    handleClick(){
        this.id++;
        this.setState({ data: [...this.state.data, <ItemCard title={this.name.value} oldPrice={this.price.value}$ newPrice={this.discount.value}$ id={this.id} key={this.id} delete={this.handleClickRemove}/>] });
    }

    handleClickRemove(id){
        const {data} = this.state;
        const updatedArray = data.filter((element) => id !== element.props.id);
        this.setState({data:updatedArray});
    }

    render() {
        return (
            <div id="main">
                <div className="input-box">
                    <label htmlFor="title">Name of Product</label>
                    <input type="text" onChange={this.handleChange} ref={(title) => this.name = title} id="title" placeholder="title"/>
                    <label htmlFor="oldPrice">Old Price</label>
                    <label htmlFor="newPrice">Current price with a discount</label>
                    <input type="text" onChange={this.handleChange} ref={(oldPrice) => this.price = oldPrice} id="oldPrice" placeholder="oldPrice"/>
                    <input type="text" onChange={this.handleChange} ref={(newPrice) => this.discount = newPrice} id="newPrice" placeholder="newPrice"/>
                    <button id="add" onClick={this.handleClick}>Append</button>
                </div>
                <div className="catalog">
                    {this.state.data}

                    {/* <ItemCard title="" oldPrice="" newPrice="" />,
                    <ItemCard title="LavaVtase" oldPrice="68" newPrice ="35"/>,
                    <ItemCard title="LavaVtase" oldPrice="68" newPrice ="35"/>,
                    <ItemCard title="LavaVtase" oldPrice="68" newPrice ="35"/> */}
                </div>
            </div>
        );
    }
}

export default Wrapper;