import { useState, useEffect } from 'react'
import { PHASES } from './data'
import Header from './components/Header'
import PhaseGroup from './components/PhaseGroup'
import BottomBar from './components/BottomBar'
import ResetModal from './components/ResetModal'

const STORAGE_KEY = 'hca_done_v2'

function getState() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') } catch { return {} }
}

function countTrainDays(days) {
  return days.filter(d => d[1] !== 'Hvile' && d[1] !== 'Aktiv hvile').length
}

export default function App() {
  const [done, setDone] = useState(getState)
  const [openWeeks, setOpenWeeks] = useState({})
  const [showReset, setShowReset] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(done))
  }, [done])

  const totalDays = PHASES.reduce((sum, ph) =>
    sum + ph.weeks.reduce((s, w) => s + countTrainDays(w.days), 0), 0)

  const doneCount = Object.values(done).filter(Boolean).length

  const daysLeft = Math.ceil((new Date('2026-09-27') - new Date()) / 86400000)

  function toggleDay(key) {
    setDone(prev => ({ ...prev, [key]: !prev[key] }))
  }

  function toggleWeek(key) {
    setOpenWeeks(prev => ({ ...prev, [key]: !prev[key] }))
  }

  function reset() {
    setDone({})
    setShowReset(false)
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingBottom: 80 }}>
      <Header doneCount={doneCount} totalDays={totalDays} daysLeft={daysLeft} />
      <div>
        {PHASES.map((phase, pi) => (
          <PhaseGroup
            key={pi}
            phase={phase}
            phaseIndex={pi}
            done={done}
            openWeeks={openWeeks}
            onToggleWeek={toggleWeek}
            onToggleDay={toggleDay}
            countTrainDays={countTrainDays}
          />
        ))}
      </div>
      <BottomBar onReset={() => setShowReset(true)} />
      {showReset && <ResetModal onConfirm={reset} onCancel={() => setShowReset(false)} />}
    </div>
  )
}
