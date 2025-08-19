import styles from './styles.module.css';

export const MarkdownContent = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}