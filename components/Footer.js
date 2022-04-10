import styles from '../styles/Footer.module.css';
import Image from 'next/image'

export default function Footer() {
    return (
      <footer className={styles.footer}>

        <div className={styles.logo}></div>

        <div>
          Feito por&nbsp;
          <a href="https://breno.dev" target="_blank" rel="noopener noreferrer">
            Breno
          </a>
        </div>

      </footer>
    )
}