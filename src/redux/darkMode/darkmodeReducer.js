const initialState = {mode: false}

function darkModeReducer(state=initialState, action){
    switch (action.type) {
        case 'dark':
            return {mode: true}
        case 'light':
            return {mode: false}
        default:
            return state;
    }
}

export default darkModeReducer