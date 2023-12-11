const initialState = []

function videosFilterReducer(state=initialState, action){
    switch (action.type) {
        case 'setAll':
            return [...action.payload]
        
        case 'search':
            const {allVideos, word} = action.payload
            const found = allVideos?.filter(item=> item.title.toLocaleLowerCase().includes(word?.toLocaleLowerCase()))
            return [...found]
        
        case 'filterByCategory':
            const {allData, category} = action.payload
    
            if(category==='all') return [...allData]
            return [... allData?.filter(i=> i.category=== category)]
        
        case 'latest':
            const sortedLatest = action?.payload?.sort((a,b)=> (new Date(b.time))- (new Date(a.time)))
            
            return [...sortedLatest]
        
        case 'mostView':
            const sorted = action.payload.sort((first, second)=>second.viewCount - first.viewCount)
            return [...sorted]

        default:
            return state
    }
}

export default videosFilterReducer