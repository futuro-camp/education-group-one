import React from "react";
import { connect } from "react-redux";
import Card from "./card";
import { updateAnime } from "../../actions";

const Cards = (props: any) => (
    <div className="cards">
        <div className="cards-inner" onScroll={props.updateAnime}>
            <ul>
                {props.anime.map((element: any) => (
                    <Card   id={element.id} 
                            image={element.image} 
                            title={element.title}
                            episodeCount={element.episodeCount}
                            episodeLength={element.episodeLength}
                            startDate={element.startDate}
                            description={element.description}/>
                ))}
            </ul>
        </div>
    </div>
);

export default connect(
    (state: any) => ({
        anime: state.anime
    }),
    (dispatch) => ({
        updateAnime: () => { dispatch(updateAnime()); }
    })
)(Cards);
