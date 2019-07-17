import React from "react";
import "./items.css";

class Items extends React.Component {

    constructor(){
        super();
        this.state ={
            categories: [
                {
                    name: "cars",
                    id: 0
                },
                {
                    name: "moto",
                    id: 1
                },
                {
                    name: "bikes",
                    id: 2
                },
                {
                    name: "skates",
                    id: 3
                }],

            items: [
                {
                    name: "skate vans",
                    id: 0
                },
                {
                    name: "bike saturn",
                    id: 1
                },
                {
                    name: "moto yava",
                    id: 2
                },
                {
                    name: "car bmw",
                    id: 3},]
        }
    }

    //dropDown takes categories.names
    categoriesMap(array) {
        return array.map((element) => <li key={element.id}>{element.name}</li>)
    }

    render(){
        return (
            <div>
                <h1>Items</h1>
                <ul>
                    {this.categoriesMap(this.state.categories)}
                </ul>
            </div>
        )
    }
}

export default Items;
