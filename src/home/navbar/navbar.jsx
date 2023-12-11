import { useDispatch, useSelector } from 'react-redux'
import styles from './navbar.module.css'
import { Bars3Icon, MoonIcon, SunIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

function Navbar(){
    const [isOpen, setIsOPen] = useState(false)
    const dispatch = useDispatch()
    const allVideos = useSelector((state)=>state.allVideos)
    const dark = useSelector((state)=>state.darkMode)
    const option = useSelector((state)=>state.option)

    const handelSearch =(e)=>{
        const word = e.target.value
        dispatch({
            type: 'search',
            payload: {allVideos, word}
        })
    }

    const handelOption = (e)=>{
        const category = e.target.value
        const allData = allVideos

        dispatch({
            type: 'filterByCategory',
            payload: {allData, category}
        })

        dispatch({
            type: 'change',
            payload: category
        })

    }
     
    const handelAllOnIcon=()=>{
         
        const category = 'all'
        const allData = allVideos

        dispatch({
            type: 'filterByCategory',
            payload: {allData, category}
        })

        dispatch({
            type: 'change',
            payload: category
        })
    }

    const handelLatest =()=>{
        dispatch({
            type: 'latest',
            payload: allVideos,
        })
    }

    const handelPopular = ()=>{
        dispatch({
            type: 'mostView',
            payload: allVideos,
        })
    }

    
    const handelDarkMode=()=>{
        if(dark.mode===true){
            dispatch({
                type: 'light'
            })
        }
        else {
            dispatch({
                type: 'dark'
            })
        }
    }
    
    return(
        <>
            <nav className={styles.navContainer} style={dark.mode?{backgroundColor: '#1b1b1d', color: 'white'}: null}>

                <div className={styles.navMenu}>
                    <div className={styles.icon}>
                        {
                            isOpen?
                            <XMarkIcon className={styles.barsIcon} onClick={()=>setIsOPen(prev=> !prev)}/>:
                            <Bars3Icon className={styles.barsIcon} onClick={()=>setIsOPen(prev=> !prev)}/>
                        }
                        <div onClick={handelAllOnIcon}>CsWorld</div>
                    </div>    

                    <div className={styles.navCategory} style={isOpen?{display: 'flex'}: null} >
                        <div className={styles.cat} onClick={handelLatest}>Latest</div>
                        <div onClick={handelPopular} className={styles.cat}>Popular</div>
                        <div>
                            <select onChange={handelOption} className={styles.catSelect} value={option?.selected}>
                                <option  value="all"  >All</option>
                                <option  value="c/c++"  >C/C++</option>
                                <option  value="javascript"  >Javascript</option>
                                <option  value="dsa"  >DSA</option>
                                <option  value="react" >React</option>
                            </select>
                        </div>
                        <div className={styles.cat}>Saved</div>
                    </div>
            
                    <div className={styles.navMethod}>
                            <div>
                                <input type="search" name="" id="" className={styles.search} placeholder='  search' onChange={handelSearch}/>
                            </div>
                             
                            <div className={styles.darkModeContainer} onClick={handelDarkMode}>
                                {
                                    dark.mode?
                                      <MoonIcon
                                            style={{height: '1.5rem', width: '1.4rem'}}
                                            
                                            
                                        ></MoonIcon>:
                                        <SunIcon
                                            style={{height: '1.5rem', width: '1.4rem'}}
                                        />
                                }
                                <span className={styles.toolTip}><p>Dark/Light</p></span>
                            </div>
                            <div className={styles.login}>Login</div>
                            {/* <div><UserCircleIcon style={{width: '2.5rem', height: '2.5rem'}}/></div> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar