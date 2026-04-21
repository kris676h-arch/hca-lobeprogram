import styles from './Header.module.css'

export default function Header({ doneCount, totalDays, daysLeft }) {
  const pct = totalDays > 0 ? Math.round(doneCount / totalDays * 100) : 0

  return (
    <div className={styles.hero}>
      <p className={styles.sub}>HCA Halvmaraton · 27. september 2026</p>
      <h1 className={styles.title}>Løb på <em>1:55</em></h1>

      <div className={styles.statsRow}>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Mål pace</div>
          <div className={`${styles.statVal} ${styles.accent}`}>5:27</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Fuldført</div>
          <div className={styles.statVal}>{doneCount} / {totalDays}</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.statLabel}>Dage til løb</div>
          <div className={styles.statVal}>{daysLeft > 0 ? daysLeft : '🏁'}</div>
        </div>
      </div>

      <div className={styles.progressWrap}>
        <div className={styles.progressBg}>
          <div className={styles.progressFill} style={{ width: pct + '%' }} />
        </div>
        <div className={styles.progressMeta}>
          <span>{pct}% gennemført</span>
          <span>27. sep 2026</span>
        </div>
      </div>
    </div>
  )
}
