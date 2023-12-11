import { useSelector } from 'react-redux'
import styles from './player.module.css'

function Play({link,title}){
    const dark = useSelector((state)=>state.darkMode)
    
    return(
        <>
            <div style={dark.mode?{backgroundColor: '#1b1b1d', color: 'white'}: null}>
                <iframe
                    className={styles.playingContent}
                    src={link}
                />
                <div style={{
                    display: 'flex',
                    textAlign: 'center',
                    fontFamily: 'sans-serif'
                }}>
                    <div style={{
                        fontSize: 'larger',
                        fontWeight: '700',
                        marginRight: '10%',
                    }}>{title}</div>
                    <div style={{
                        backgroundColor: '#189AB4',
                        padding: '1%',
                        borderRadius: '4%',
                        color: 'white',
                    }}>Save</div>
                </div>
            </div>
        </>
    )
}

export default Play