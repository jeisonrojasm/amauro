import ReactDOM from 'react-dom';
import './DemandDetailModal.css'

const portalRoot = document.getElementById('portal-root');

export const DemandDetailModal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="demand-detail-modal">
      {children}
    </div>,
    portalRoot
  );
}