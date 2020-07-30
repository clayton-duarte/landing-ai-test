import React, {
  FunctionComponent,
  createContext,
  useContext,
  Dispatch,
  useState,
} from "react";

const SelectedImageCtx = createContext<{
  setSelectedImage: Dispatch<number>;
  selectedImage: number;
}>(null);

const StateContextProvider: FunctionComponent = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  return (
    <SelectedImageCtx.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </SelectedImageCtx.Provider>
  );
};

const useStateHook = () => {
  const { selectedImage, setSelectedImage } = useContext(SelectedImageCtx);

  return { selectedImage, setSelectedImage };
};

export default StateContextProvider;
export { useStateHook };
