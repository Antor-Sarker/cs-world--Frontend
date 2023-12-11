import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import fetchVideos from "../../redux/videos/thunk/fetchVideos"
import styles from './videos.module.css'
import { useNavigate } from "react-router-dom"

import {BookmarkIcon, EyeIcon} from '@heroicons/react/24/outline'
import {PlayCircleIcon} from '@heroicons/react/24/solid'


function Videos(){
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.filterVideos)
    const allData = useSelector((state)=>state.allVideos)
    const dark = useSelector((state)=>state.darkMode)

    useEffect(()=>{
        dispatch(fetchVideos)
    },[dispatch])

    const navigate = useNavigate()
    
    const handelCategory = (category)=>{
        dispatch({
            type: 'filterByCategory',
            payload: {allData, category}
        })

        dispatch({
            type: 'change',
            payload: category,
        })
    }

    const handelPlay = (id,count)=>{
        
        fetch('https://cs-world-backend.onrender.com/incrementView',{
            method: 'PATCH',
            body: JSON.stringify({
                id,
                count,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8', 
            },
        })
        .then(res=>res.json())
        .then(result=>{
            navigate(`/player/${id}`)
        })

    }

    return(
        <>
            <div className={styles.videosContainer} style={dark.mode?{backgroundColor: '#1b1b1d', color: 'white'}: null}>
                {
                    data.map(video=>{
                        
                    const today = new Date()
                    const uploadedDate = new Date(video.time)
                    const sub = today - uploadedDate
                    const elapsed = Math.floor(sub/(1000*60*60*24))
                    

                        return (
                            <div key={video._id} className={styles.singelVideo}>
                                <div className={styles.playerContainer}>
                                    <img src={video.thumbnail} className={styles.thumbnail} onClick={()=>handelPlay(video._id, video.viewCount)}/>
                                    <PlayCircleIcon className={styles.playButton} onClick={()=>handelPlay(video._id, video.viewCount)}/>
                                </div>
                                
                                <div className={styles.footer}>
                                    <div style={{
                                        display: 'flex'
                                    }}>
                                        <EyeIcon style={{color: '#000C66', width:'1.5rem',height: '1.5rem'}}/>
                                        <div>{video?.viewCount} views</div>
                                    </div>

                                    <p>{elapsed} Days Ago</p>
                                    <h3 onClick={()=>handelCategory(video.category)} className={styles.tag}> #{video.category}</h3>
                                    <BookmarkIcon style={{color: 'blue', width:'1.8rem',height: '1.8rem'}}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Videos