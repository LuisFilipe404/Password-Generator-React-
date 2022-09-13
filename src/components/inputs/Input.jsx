import styles from './Input.module.css'

function Input ({ label, name, varName, getInput}) {

    const inputValue = document.querySelector('.checkInput')

    return (
    <div className={styles.ipt}>
        <label htmlFor={name}>{label}</label>
        <input 
            type="checkbox"
            id={name}
            className="checkInput"
            onClick={getInput}
        />
    </div>
    )
}

export default Input