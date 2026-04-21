import styles from './BottomBar.module.css'

export default function BottomBar({ onReset }) {
  return (
    <div className={styles.bar}>
      <div className={styles.tip}>Tryk på en dag for at markere den fuldført</div>
      <button className={styles.btn} onClick={onReset}>Nulstil alt</button>
    </div>
  )
}
