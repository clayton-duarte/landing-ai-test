import React, {
  FunctionComponent,
  createContext,
  useContext,
  Dispatch,
  useState,
} from "react";
import { Region } from "react-region-select";

const SelectedImageCtx = createContext<{
  setSelectedImage: Dispatch<number>;
  selectedImage: number;
}>(null);

const RegionCtx = createContext<{
  setRegions: Dispatch<Region[][]>;
  regions: Region[][];
}>(null);

const StateContextProvider: FunctionComponent = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [regions, setRegions] = useState<Region[]>([[]]);

  return (
    <SelectedImageCtx.Provider value={{ selectedImage, setSelectedImage }}>
      <RegionCtx.Provider value={{ regions, setRegions }}>
        {children}
      </RegionCtx.Provider>
    </SelectedImageCtx.Provider>
  );
};

const useStateHook = () => {
  const { selectedImage, setSelectedImage } = useContext(SelectedImageCtx);
  const { regions, setRegions } = useContext(RegionCtx);

  return { selectedImage, setSelectedImage, regions, setRegions };
};

export default StateContextProvider;
export { useStateHook };
