import styles from './styles.module.css'

export default function PastEventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <div className={styles.background} />
    <div className={styles.container}>
    {children}
    </div>
    </>
  )
}
