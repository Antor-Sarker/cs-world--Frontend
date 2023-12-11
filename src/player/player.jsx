import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Play from "./play"
import Related from "./related"
import styles from './player.module.css'
import loginStyle from '../home/navbar/navbar.module.css'
import {ArrowLeftIcon, UserCircleIcon} from '@heroicons/react/24/outline'

function Player(){
    const {id} = useParams()

    const allVideos = useSelector((state)=>state.allVideos)
    const data = allVideos?.find(i=>i._id===id)
    const link = `https://www.youtube.com/embed/${data?.videoLink}?autoplay=1&mute=1`
    // "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
    const navigate = useNavigate()

    const dark = useSelector((state)=>state.darkMode)

    return(
        <>
            <div className={styles.playerHeader} style={dark.mode?{backgroundColor: '#1b1b1d', color: 'white'}: null}>
                <div className={styles.playerHeaderBack} onClick={()=>navigate('/')}>
                    <ArrowLeftIcon style={{
                        marginRight:'1rem',
                        width: '1.3rem',
                        height:'1.3rem',
                    }}/>
                    
                    <div>
                        Home
                    </div>
                </div>
                <div>
                <div className={loginStyle.login}>Login</div>
                {/* <div><UserCircleIcon style={{width: '2.5rem', height: '2.5rem'}}/></div> */}
                </div>
            </div>

            <div className={styles.playerContainer} style={dark.mode?{backgroundColor: '#1b1b1d', color: 'white'}: null}>
                <Play link={link} title={data?.title}/>
                <Related id={id}/>
            </div>
        </>
    )
}

export default Player