import React from "react";
import "./items.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
class Items extends React.Component {

    constructor(){
        super();
        this.state ={
            categories: [
                {
                    name: "Cars",
                    id: 0
                },
                {
                    name: "Moto",
                    id: 1
                },
                {
                    name: "Bikes",
                    id: 2
                },
                {
                    name: "Skates",
                    id: 3
                }],

            items: []
        }
    }

    //dropDown takes categories.names
    categoriesMap(array) {
        return array.map((element) => {
            console.log(element);
            return <li key={element.id}>{element.name}</li>
        })
    }
    //dropDown choose ID
    choice(val) {
        console.log(val);
        console.log(val.value.key);
    }

    render(){
        return (
            <div>
                <h1>Items</h1>
                <Dropdown   placeholder="Select"
                            options={this.categoriesMap(this.state.categories)}
                            onChange={(value)=>this.choice(value)}
                            className="DropDown" >
                </Dropdown>
                <div>
                    {this.state.items.map(it=><p>{it.name}</p>)}
                </div>
            </div>
        )
    }
}

export default Items;
