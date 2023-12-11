const initialState = []

function videosReducer(state=initialState, action){
    switch (action.type) {
        case  'setAllVideos':
            return [...action.payload]
        
        default:
            return state
    }
}

export default videosReducer