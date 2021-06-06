import "./PopUpModal.css";
export function PopUpModal({ props }) {
  const { showModal, modalText } = props;
  console.log("yahaa tashreef aarahai hai");
  console.log({ modalText });
  const modalClass = {
    offclick: "modale",
    onclick: "modale active",
  };
  if (showModal) {
    return <div className={modalClass.onclick}>{modalText}</div>;
  } else {
    return <div className={modalClass.offclick}>{modalText}</div>;
  }
}
