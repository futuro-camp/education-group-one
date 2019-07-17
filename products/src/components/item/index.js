import React, {Component} from "react";

export default class Item extends Component {

    constructor(){
        super();
        this.state = {
            name: "Vasya",
            description: `fldsfo fdslfpsd flsp lfspd lfsdpf lsdpf dsplfpsd flsdp flsd
            fdoskf odf kdosfk dsofkdso fkdso fkdsof kdso fksdof kodskfdoskf dsokf sdofk
            fdk sofkdsofksdofksd okfdsofk dsofksdok fosdk fosd kfodsfk osdkf doskdsokds 
            fkd osfkdso fkosdfksdo fkdsofkdso fksdo fksdof kdsofkds ofkds ofkdsofk odkf 
            odskfod`
        };
        this.clickCallback = this.clickCallback.bind(this);
    }

    clickCallback(){
        let index = this.props.history.location.pathname.split('/').pop();
        console.log(index);
    }

    render() {
        return (
            <div className="item">
                <img src="" />
                <p className="name">{this.state.name}</p>
                <p className="description">{this.state.description}</p>
            </div>
        );
    }
}