// src/components/ModalComponent.js
import { observer } from "mobx-react-lite";
import modalStore from "../stores/ModalStore";

const ModalComponent = observer(() => {
  const handleOpenModal = () => {
    modalStore.openModal();
  };

  const handleCloseModal = () => {
    modalStore.closeModal();
  };

  return (
    <div>
      <h1>Modal Example</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      {modalStore.isOpen && (
        <div style={{ border: "1px solid black", padding: "10px", marginTop: "10px" }}>
          <p>This is a modal.</p>
          <button onClick={handleCloseModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
});

export default ModalComponent;
