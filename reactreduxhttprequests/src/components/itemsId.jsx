// import React from "react";
// import "../styles/itemsId.css";
// import axios from "axios";


// class ItemsId extends React.Component {
//     constructor(props){
//         super(props);
//         this.state ={
//             name: "Default Name",
//             description: "Default description"
//         };
//     }
//     componentWillMount() {
//         //getting item's ID by history-string
//         let id = this.props.history.location.pathname.split("/").pop();
//         //getting item's data from server
//         axios.get(`http://192.168.1.100:3000/api/items/${id}`, {header: {auth:localStorage.getItem("MyKey")}})
//         .then((answer) => {
//             if(answer.data) {
//                 this.setState({name: answer.data.name, description: answer.data.description});
//             } else {
//                 //validation on "empty" answer.data
//                 this.props.history.push("/error");
//             }
//         })
//         .catch((error) => this.props.history.push("/error"));
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Item with own id</h1>
//                 <h2>{this.state.name}</h2>
//                 <img src="https://programmingwithmosh.com/wp-content/uploads/2017/06/mosh-300px.png"/>
//                 <h3>{this.state.description}</h3>
//             </div>
//         );
//     }
// }

// export default ItemsId;