import { useEffect } from 'react'
import CustomButton from '../button/button'
import styles from './greeting.module.css'
import { useNavigate } from 'react-router-dom'

export default function Greeting ({data}) {

    const navigate = useNavigate()
    function getHomepage () {
        navigate('/')
    }
    const {
        score = 0,
        userName = ''
    } = data || {}
    
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        },5000)
    }, [])

    return (
        <div className={styles.wrapper}>
            <h4>Hey {userName}</h4>
            <p>You have scored : {score}/10</p>
            <p>status : {score > 5 ? 'PASS' : 'FAIL'}</p>
            <CustomButton 
                btnText='Go to home page'
                customStyle = {styles.btnStyle}
                handlerFunction = {getHomepage}
            />
        </div>

    )
}