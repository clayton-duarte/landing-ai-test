import React, {
  FunctionComponent,
  createContext,
  useContext,
  Dispatch,
  useState,
} from "react";
import { Region } from "react-region-select";

const ImageListCtx = createContext<{
  setImageList: Dispatch<string[]>;
  imageList: string[];
}>(null);

const SelectedImageCtx = createContext<{
  setSelectedImage: Dispatch<number>;
  selectedImage: number;
}>(null);

const ImageRefCtx = createContext<{
  setImageRef: Dispatch<HTMLDivElement[]>;
  imageRef: HTMLDivElement[];
}>(null);

const RegionCtx = createContext<{
  setRegions: Dispatch<Region[][]>;
  regions: Region[][];
}>(null);

const StateContextProvider: FunctionComponent = ({ children }) => {
  // TODO > adopt useReducer
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [imageRef, setImageRef] = useState<HTMLDivElement[]>([]);
  const [imageList, setImageList] = useState<string[]>([]);
  const [regions, setRegions] = useState<Region[][]>([[]]);

  return (
    <ImageListCtx.Provider value={{ imageList, setImageList }}>
      <SelectedImageCtx.Provider value={{ selectedImage, setSelectedImage }}>
        <ImageRefCtx.Provider value={{ imageRef, setImageRef }}>
          <RegionCtx.Provider value={{ regions, setRegions }}>
            {children}
          </RegionCtx.Provider>
        </ImageRefCtx.Provider>
      </SelectedImageCtx.Provider>
    </ImageListCtx.Provider>
  );
};

// TODO > split in multiple hooks
const useStateHook = () => {
  const { selectedImage, setSelectedImage } = useContext(SelectedImageCtx);
  const { imageList, setImageList } = useContext(ImageListCtx);
  const { imageRef, setImageRef } = useContext(ImageRefCtx);
  const { regions, setRegions } = useContext(RegionCtx);

  return {
    setSelectedImage,
    selectedImage,
    setImageList,
    setImageRef,
    setRegions,
    imageList,
    imageRef,
    regions,
  };
};

export default StateContextProvider;
export { useStateHook };
