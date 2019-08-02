import React, { Component } from "react";
import ListItem from "../listItem";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./style.css";
import { connect } from "react-redux";
import { itemListRequest } from "../redux/actions/items";
import categoryRequest from "../redux/actions/category";

class List extends Component {

    componentDidMount() {
        this.props.onMount();
    }

    chooseItem = (id) => {
        this.props.history.push(`/items/${id}`);
    }

    render() {
        return (
            <div className="itemListDiv">
                <Dropdown className="filterDropdown" controlClassName="filterDropdownControl" menuClassName="filterDropdownMenu"  options={this.props.filterOptions} onChange={this.props.onSelect} placeholder={this.props.isCathegoryLoading ? "Loading..." : "Filter" }/>
                <div className="items">
                    {this.props.isListLoading ? <div>Loading...</div> : this.props.error ? <div>{`${this.props.error}`}</div> : this.props.itemsList.map((element) => <ListItem key={element.id} name={element.name} description={element.description} chooseMethod={() => {this.chooseItem(element.id);}}/> )}
                </div>
            </div>
        );
    }
}

export default connect(
    (store) => ({
        filterOptions: store.categoryReducer.categoryList,
        isCathegoryLoading: store.categoryReducer.categoryLoading,
        itemsList: store.itemsReducer.itemList,
        isListLoading: store.itemsReducer.listLoading,
        error: store.accountReducer.error
    }),
    (dispatcher) => ({
        onMount: () => dispatcher(categoryRequest()),
        onSelect: (selected) => dispatcher(itemListRequest(selected.value))
    })
)(List);