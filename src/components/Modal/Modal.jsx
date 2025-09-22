import ReactDOM from 'react-dom'
import './Modal.css'

const portalRoot = document.getElementById('portal-root')

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="demand-detail-modal">
      {children}
    </div>,
    portalRoot
  )
}