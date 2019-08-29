import React, { useEffect } from "react";
import { connect } from "react-redux";
import { history } from "../../constants";
import { getAnime, updateAnime, changeCategory } from "../../actions";
import { NavItems } from "../../constants";
import Cards from "./cards";
import "../../style/main-page-content.scss";

interface ContentProps {
    getAnime: (props?: string) => void,
    changeCategory: (id: string) => void,
    updateAnime: () => void,
    anime: [],
    animePage: string,
    categoryId: string
}

class Content extends React.Component<ContentProps> {

    scrollTopElement: any;

    constructor(props: ContentProps) {
        super(props);
        this.scrollTopElement = React.createRef();
        this.checkScrollBottom = this.checkScrollBottom.bind(this);
        this.changeCategoryToHistoryId = this.changeCategoryToHistoryId.bind(this);
    }

    componentDidMount() {
        this.changeCategoryToHistoryId();
    }

    componentDidUpdate() {
        this.changeCategoryToHistoryId();
    }

    changeCategoryToHistoryId() {
        let id = history.location.search.split("=")[1];
        if(id){
            return id !== this.props.categoryId ? this.props.changeCategory(id) : null; 
        } else {
            return "-1" !== this.props.categoryId ? this.props.changeCategory("-1") : null; 
        }
    }

    checkScrollBottom() {
        if(this.props.animePage === NavItems.all || this.props.animePage === NavItems.highRated){
            if((this.scrollTopElement.current.scrollTop + this.scrollTopElement.current.offsetHeight >= this.scrollTopElement.current.scrollHeight - 250)) {
                console.log("scrolling");
                this.props.updateAnime();
            }
        }
    }

    render() {
        return (
            <div className="main-page-content">
                <div className="search">
                    <input type="text" placeholder="search..." />
                    <div className="search-pages">
                        <button onClick={() => { this.props.getAnime(); }}>All</button>
                        <button onClick={() => { this.props.getAnime(`${this.props.categoryId !== "-1" ? "" : `&filter%5Bstatus%5D=finished`}&sort=-start_date`); }}>Newly released</button>
                        <button onClick={() => { this.props.getAnime("&sort=-averageRating"); }}>High Ranked</button>
                    </div>
                </div>
                <Cards updateAnime={this.checkScrollBottom} />
            </div>
        );
    }
}

export default connect(
    (state: any) => ({
        anime: state.anime,
        animePage: state.animePage,
        categoryId: state.categoryId
    }),
    (dispatch) => ({
        getAnime: (props?: string) => { dispatch(getAnime(props)); },
        changeCategory: (id: string) => { dispatch(changeCategory(id)); },
        updateAnime: () => { dispatch(updateAnime()); }
    })
)(Content);
