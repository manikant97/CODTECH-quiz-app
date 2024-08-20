import styles from './button.module.css'

export default function CustomButton ({
    btnText = '',
    customStyle = '',
    handlerFunction = () => {}
}) {
    return (
        <button 
            className={
                `${styles.defaultStyle} 
                ${customStyle}`
            }
            onClick={handlerFunction}
        > { btnText || 'Submit' } </button>
    )
}