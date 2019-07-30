
const initState = {
    posts: [
        {id:1, title:"first post"},
        {id:2, title:"second post"},
        {id:3, title:"third post"}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;
