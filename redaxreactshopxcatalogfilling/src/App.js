import React from "react";
import "./App.css";
import {connect} from "react-redux";
import {addItem, changeName, changePrice, changeDiscount} from "./actions";
import Card from "./components";
//Component App
function App(props) {
  return (
    <div className="App">
      <h1>Redux-React Training 🚀</h1>
      <input type="text" value={props.name} onChange={(e) => props.onChangeName(e)}/>
      <input type="text" value={props.price} onChange={(e) => props.onChangePrice(e)}/>
      <input type="text" value={props.discount} onChange={(e) => props.onChangeDiscount(e)}/>
      <button className="addItem" onClick={props.onClickAdd}>Add an Item</button>
      <ul>
        {props.list.map((el) => <Card key={el.id} id={el.id} name={el.name} price={el.price} discount={el.discount} />)}
      </ul>
    </div>
  );
}
//Implemented states-data (which is a storage) to Component's props
const stateToProps = (state) => ({
  name: state.name, price: state.price, discount: state.discount, list: state.list,
});
//Implemented states-functions (which is ) to Component's props
const dispatchToProps = (dispatch) => ({
  onClickAdd: () => dispatch(addItem()),
  onChangeName: (e) => dispatch(changeName(e)),
  onChangePrice: (e) => dispatch(changePrice(e)),
  onChangeDiscount: (e) => dispatch(changeDiscount(e))
});
//Connecting these to the App-Component
export default connect(stateToProps, dispatchToProps)(App);
