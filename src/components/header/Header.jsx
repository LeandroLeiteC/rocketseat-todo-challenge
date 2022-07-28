import styles from './Header.module.css'
import todoLogo from '../../assets/todoLogo.png'

export function Header() {
    return (
        <header className={styles.header}>
            <img 
                className={styles.logo}
                src={todoLogo} 
                alt="Logo" 
            />
        </header>
    );
}