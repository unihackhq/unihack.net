import { Logo } from "../logo"
import styles from "./header.module.css"
export const Header = () => {
    return (
        <header className={styles.container}>
            <nav>
                <div className={styles.logo}><Logo /><span>2026</span></div>
            </nav>
        </header>
    )
}