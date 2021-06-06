import "./PopUpModal.css";
export function PopUpModal({ modalText }) {
  console.log("yahaa tashreef aarahai hai");
  console.log({ modalText });
  const modalClass = {
    offclick: "modale",
    onclick: "modale active",
  };
  return <div className={modalClass.onclick}>{modalText}</div>;
}
