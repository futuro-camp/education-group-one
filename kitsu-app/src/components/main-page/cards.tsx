import React from "react";
import { connect } from "react-redux";
import Card from "./card";
import { updateAnime } from "../../actions";


// TODO: refactor ternar operations

const Cards = (props: any) => (
    <div className="cards">
        <div    className="cards-inner" 
                onScroll={(e) => {
                    if(!props.updating) {
                        if((e.currentTarget.scrollTop + e.currentTarget.offsetHeight >= e.currentTarget.scrollHeight - 350)) {
                            props.updateAnime();
                        }
                    }
                }}>
            {props.fetching ? 
                <div className="loading"></div> : props.anime.length !== 0 ? 
                    <ul>
                        {props.anime.map((element: any) => (
                            <Card   id={element.id} 
                                    key={element.id}
                                    image={element.image} 
                                    title={element.title}
                                    episodeCount={element.episodeCount}
                                    episodeLength={element.episodeLength}
                                    startDate={element.startDate}
                                    description={element.description}/>
                        ))}
                    </ul> :
                    <h2 className="no-elements">No elements</h2>}
        </div>
    </div>
);

export default connect(
    (state: any) => ({
        anime: state.anime,
        updating: state.updating,
        fetching: state.fetching
    }),
    (dispatch) => ({
        updateAnime: () => { dispatch(updateAnime()); }
    })
)(Cards);
