import React from "react";

const ConfirmModal = ({ isOpen, onClose, onConfirm, title }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Attention</h2>
        <p>Are you sure you want to delete {title}?</p>
        <div className="modal-actions">
          <button onClick={onConfirm} className="delete-button">
            Delete
          </button>
          <button onClick={onClose} className="cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
