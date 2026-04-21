import WeekCard from './WeekCard'
import styles from './PhaseGroup.module.css'

export default function PhaseGroup({ phase, phaseIndex, done, openWeeks, onToggleWeek, onToggleDay, countTrainDays }) {
  return (
    <div className={styles.group}>
      <p className={styles.label}>{phase.label}</p>
      {phase.weeks.map((week, wi) => {
        const weekKey = `p${phaseIndex}w${wi}`
        const trainDays = countTrainDays(week.days)
        const weekDone = week.days.reduce((sum, d, di) => {
          if (d[1] === 'Hvile' || d[1] === 'Aktiv hvile') return sum
          return sum + (done[`${weekKey}d${di}`] ? 1 : 0)
        }, 0)
        return (
          <WeekCard
            key={weekKey}
            weekKey={weekKey}
            week={week}
            badge={phase.badge}
            badgeText={phase.badgeText}
            trainDays={trainDays}
            weekDone={weekDone}
            isOpen={!!openWeeks[weekKey]}
            done={done}
            onToggleWeek={() => onToggleWeek(weekKey)}
            onToggleDay={onToggleDay}
          />
        )
      })}
    </div>
  )
}
