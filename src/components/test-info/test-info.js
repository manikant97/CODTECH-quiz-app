import { useState } from "react"
import CustomButton from "../button/button"
import styles from './test-info.module.css'
import { SUBJECTS } from "../../const"
import { useNavigate } from 'react-router-dom'
export default function TestInfo () {

    // use states to save name, slected subject, ans error message if any.
    const [name, setName] = useState('')
    const [selectedSub, setSelectedSub] = useState('')
    const [errMsg, setErrMsg] = useState('')

    // to navigate to start test page
    const navigate = useNavigate();


    function handleChangeName (e) {
        setErrMsg('')
        setName(e.target.value)
        // setting unser input name
    }

    function handleSelectSubject (e) {
        setErrMsg('')
        setSelectedSub(e.target.value)
        // setting user slected subject
    }
    
    function handleStartTest () {

        // checking name and selected subject by user before taking to start test page.
        // if anything is missing setting the respective error message.
        if(!name){
            setErrMsg('Please Add your name.')
            return ;
        }
        if(!selectedSub) {
            setErrMsg('Please select the subject.')
            return ;
        }
        // if all the data is filled properly by user
        // saving data in local storage before changing the page
        // so that we could check user input on next page (start test page)

        // we need to strigify the object before string in localstorage
        localStorage.setItem(
            'userDetails', 
            JSON.stringify({
                name, selectedSub
            })
        )
        // if all good to go, will take user to start test page.
        navigate('/start-test')
        
    }

    return (
        <div className={styles.wrapper}>
            {/* input to collect user name */}
            <input 
                className={styles.input} 
                placeholder="Enter your name"
                onChange={handleChangeName}
            />
             
             {/* select to collect user subject for test */}
            <select 
                className={styles.select} 
                onChange={handleSelectSubject}
            >
                <option 
                    value='' 
                    selected
                > Select Subject </option>
                {
                    SUBJECTS.map(subject => (
                        <option value={subject}>
                            {subject}
                        </option>
                    ))
                }

            </select>

            <div className={styles.btnWrapper}>
                {/* showing error message is any */}
                {
                    errMsg && (
                        <p>{errMsg}</p>
                    )
                }
                {/* using custom button ans passed props to modify the button */}
                <CustomButton 
                    btnText = "Start Test"
                    customStyle={styles.btnStyle}
                    handlerFunction={handleStartTest}
                />

            </div>
            

        </div>
    )

}