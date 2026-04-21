import styles from './ResetModal.module.css'

export default function ResetModal({ onConfirm, onCancel }) {
  return (
    <div className={styles.overlay} onClick={onCancel}>
      <div className={styles.sheet} onClick={e => e.stopPropagation()}>
        <p>Vil du nulstille al din fremgang? Det kan ikke fortrydes.</p>
        <div className={styles.btns}>
          <button className={styles.cancel} onClick={onCancel}>Annuller</button>
          <button className={styles.confirm} onClick={onConfirm}>Nulstil</button>
        </div>
      </div>
    </div>
  )
}
