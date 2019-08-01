import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class PostList extends Component {
    state ={
        posts : []
    }
    componentDidMount() {
    }
    render() {
        const { posts } = this.props;
        const postList = posts.map(post => {
            return (
                <div key={post.id}>
                    <div>
                        <Link to={"/" + post.id}>
                            <p>{post.title}</p>
                        </Link>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
const dispatchToProps = (dispatch) => ({

})

export default connect (mapStateToProps, null)(PostList);
