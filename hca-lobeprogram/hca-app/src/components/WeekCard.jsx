import DayRow from './DayRow'
import styles from './WeekCard.module.css'

export default function WeekCard({ weekKey, week, badge, badgeText, trainDays, weekDone, isOpen, done, onToggleWeek, onToggleDay }) {
  const pct = trainDays > 0 ? (weekDone / trainDays * 100) : 0

  return (
    <div className={styles.card}>
      <div className={styles.header} onClick={onToggleWeek}>
        <div>
          <div className={styles.name}>{week.label}</div>
          <div className={styles.meta}>{week.sub} · {weekDone}/{trainDays} dage</div>
        </div>
        <div className={styles.right}>
          <span className={`${styles.badge} ${styles[badge]}`}>{badgeText}</span>
          <span className={`${styles.chevron} ${isOpen ? styles.open : ''}`}>▾</span>
        </div>
      </div>

      <div className={styles.miniBar}>
        <div className={styles.miniBarFill} style={{ width: pct + '%' }} />
      </div>

      {isOpen && (
        <div className={styles.body}>
          {week.days.map((d, di) => {
            const key = `${weekKey}d${di}`
            const isRest = d[1] === 'Hvile' || d[1] === 'Aktiv hvile'
            return (
              <DayRow
                key={di}
                dayName={d[0]}
                desc={d[1]}
                km={d[2]}
                isRest={isRest}
                isDone={!!done[key]}
                onToggle={isRest ? undefined : () => onToggleDay(key)}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
