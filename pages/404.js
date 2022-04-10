import styles from '../styles/404.module.css';

export default function NotFound() {
    return (
        <main>

            <div className={styles.content}>

                <div className={styles.errorNumber}>
                    <h2>404</h2>
                </div>

                <div className={styles.errorText}>
                    <p>Esta página não pôde ser encontrada.</p>
                </div>

            </div>
            
        </main>
    )
}