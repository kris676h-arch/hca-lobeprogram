import styles from './DayRow.module.css'

export default function DayRow({ dayName, desc, km, isRest, isDone, onToggle }) {
  const isRace = desc.includes('HCA Halvmaraton')

  return (
    <div
      className={`${styles.row} ${isDone ? styles.done : ''} ${isRace ? styles.raceDay : ''}`}
      onClick={onToggle}
    >
      <div className={`${styles.check} ${isRace ? styles.checkRace : ''}`}>
        {isDone && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke={isRace ? '#0f0f0d' : 'var(--accent-text)'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.dayName}>{dayName}</div>
        <div className={`${styles.desc} ${isRest ? styles.rest : ''}`}>{desc}</div>
      </div>
      <div className={styles.km}>{km}</div>
    </div>
  )
}
