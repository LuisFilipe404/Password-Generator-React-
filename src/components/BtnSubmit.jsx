import styles from './BtnSubmit.module.css';

function BtnSubmit ( {createPass} ) {
    return (
        <div className={styles.container}>
            <button className={styles.btn} onClick={createPass}>Gerar Senha</button>
        </div>
    )
}

export default BtnSubmit