import { createContext, useState } from "react";

const ActionManagementContext = createContext();

export function ActionManagementProvider({ children }) {
  // const [isLoading, setIsLoading] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const [modalText, setModalText] = useState("");
  const [action, setAction] = useState({
    isLoading: false,
    showModal: false,
    modalText: "",
  });

  return (
    <ActionManagementContext.Provider value={{ action, setAction }}>
      {children}
    </ActionManagementContext.Provider>
  );
}

export function useActionManager() {
  return ActionManagementContext.useContext();
}
