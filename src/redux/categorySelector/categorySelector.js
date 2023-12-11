const initialState = {selected: 'all'}

function categorySelector(state=initialState, action){
    switch (action.type) {
        case 'change':
            return {selected: action.payload}
    
        default:
            return state
    }
}
export default categorySelector