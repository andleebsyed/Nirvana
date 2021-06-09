import "./PopUpModal.css";
export function PopUpModal({ props }) {
  const { showModal, modalText } = props;
  console.log("props we are etting are", { props });
  return (
    <div className={showModal ? "modale active" : "modale"}>{modalText}</div>
  );
}
