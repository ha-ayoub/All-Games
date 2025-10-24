
interface ModalProps{ 
  open: boolean; 
  onClose: () => void; 
  children: React.ReactNode 
}

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;
  
  return (
    <div className="memory-modal-overlay" onClick={onClose}>
      <div className="memory-modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}