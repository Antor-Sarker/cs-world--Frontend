import { useSelector } from "react-redux"
import styles from './player.module.css'
import { useNavigate } from "react-router-dom"
import { PlayCircleIcon } from "@heroicons/react/24/outline"

function Related({id}){
    const allVideos = useSelector((state)=>state.allVideos)
    const data = allVideos?.find(i=>i._id===id)
    const navigate = useNavigate()

    return(
        <>
            <div className={styles.relatedContainer}>
                    {
                        allVideos.map(item=>{
                            // && data.category===item.category
                            if(item._id!==id ){
                                return (

                                    <div key={item._id} className={styles.relatedHeader}>
                                        <img
                                            src={item.thumbnail}
                                            onClick={()=>navigate(`/player/${item._id}`)}
                                            width="90%"
                                            height="70%"
                                            style={{maxWidth: '80%', borderRadius: '6%', padding: '2%'}}
                                        />
                                        <PlayCircleIcon className={styles.relatedPlayButton}
                                            onClick={()=>navigate(`/player/${item._id}`)}/>
                                        
                                    </div>
                                )
                            }
                        })
                    }
                </div>
        </>
    )
}

export default Related