import { Logo } from '../logo'
import styles from './footer.module.css'

export const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <p className={styles.acknowledgement}>UNIHACK acknowledges the Traditional Custodians of Country throughout Australia and their connections to land, sea and community. We pay our respects  to their elders past, present and emerging.</p>
            <Logo />
            <p>&copy; 2025 UNIHACK Incorporated. All Rights Reserved.</p>
        </div>
    </footer>
)