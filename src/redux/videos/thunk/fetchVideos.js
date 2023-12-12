const fetchVideos = async (dispatch)=>{
    const response = await fetch('https://cs-world-backend.vercel.app/videos')
    const data = await response.json()

    dispatch({
        type: 'setAllVideos',
        payload: data
    })

    dispatch({
        type: 'setAll',
        payload: data
    })
}

export default fetchVideos