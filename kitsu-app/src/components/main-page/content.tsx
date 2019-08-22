import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTrendingAnime, updateAnime, changeAnimePage } from "../../actions";
import { NavItems } from "../../constants";
import Cards from "./cards";
import "../../style/main-page-content.scss";

interface ContentProps {
    getTrendingAnime: () => void,
    updateAnime: () => void,
    changePage: (page: string) => void,
    anime: [],
    animePage: string

}

class Content extends React.Component<ContentProps> {

    scrollTopElement: any;

    constructor(props: ContentProps) {
        super(props);
        this.scrollTopElement = React.createRef();
        this.checkScrollBottom = this.checkScrollBottom.bind(this);
    }

    componentDidMount() {
        this.props.getTrendingAnime();
    }

    checkScrollBottom() {
        if(this.props.animePage === NavItems.all || this.props.animePage === NavItems.highRated){
            if((this.scrollTopElement.current.scrollTop + this.scrollTopElement.current.offsetHeight >= this.scrollTopElement.current.scrollHeight - 250)) {
                this.props.updateAnime();
            }
        }
    }

    changeAnimePage(page: NavItems) {
        // this.scrollTopElement.current.scrollTop = 0;
        this.props.changePage(page);
    }

    render() {
        return (
            <div className="main-page-content">
                <div className="search">
                    <input type="text" placeholder="search..." />
                    <div className="search-pages">
                        <button onClick={() => { this.changeAnimePage(NavItems.all); }}>All</button>
                        <button onClick={() => { this.changeAnimePage(NavItems.thrending); }}>Trending</button>
                        <button onClick={() => { this.changeAnimePage(NavItems.highRated); }}>High Ranked</button>
                    </div>
                </div>
                <Cards />
            </div>
        );
    }
}

export default connect(
    (state: any) => ({
        anime: state.anime,
        animePage: state.animePage
    }),
    (dispatch) => ({
        getTrendingAnime: () => { dispatch(getTrendingAnime()); },
        updateAnime: () => { dispatch(updateAnime()); },
        changePage: (page: string) => { dispatch(changeAnimePage(page)); }
    })
)(Content);
