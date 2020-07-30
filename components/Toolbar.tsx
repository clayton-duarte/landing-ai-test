import React, { FunctionComponent, useState, useEffect } from "react";
import { Region } from "react-region-select";
import styled from "styled-components";
import {
  RiArrowRightSLine as NextIcon,
  RiShareForwardLine as RedoIcon,
  RiDeleteBinLine as DeleteIcon,
} from "react-icons/ri";

import { useStateHook } from "../providers/state";
import ToolbarWrapper from "./ToolbarWrapper";

const ButtonIcon = styled.button<{ disabled: boolean }>`
  all: unset;
  &:disabled {
    pointer-events: none;
    > svg {
      color: ${(props) => props.theme.SECONDARY};
    }
  }
`;

const UndoIcon = styled(RedoIcon)`
  transform: scaleX(-1);
`;

const PreviousIcon = styled(NextIcon)`
  transform: scaleX(-1);
`;

const Toolbar: FunctionComponent = () => {
  const [lastRemoved, setLastRemoved] = useState<Region[][]>([]);
  const {
    setSelectedImage,
    selectedImage,
    setRegions,
    imageList,
    imageRef,
    regions,
  } = useStateHook();

  const handleClickUndo = () => {
    const updatedRegions = regions;
    const popped = updatedRegions[selectedImage].pop();
    setRegions([...updatedRegions]);

    const updatedRemoved = lastRemoved;
    if (updatedRemoved[selectedImage]) {
      updatedRemoved[selectedImage].push(popped);
    } else {
      updatedRemoved[selectedImage] = [popped];
    }

    setLastRemoved([...updatedRemoved]);
  };

  const handleClickRedo = () => {
    const updatedRemoved = lastRemoved;
    const popped = updatedRemoved[selectedImage].pop();
    setLastRemoved([...updatedRemoved]);

    const updatedRegions = regions;
    updatedRegions[selectedImage].push(popped);
    setRegions([...updatedRegions]);
  };

  const handleClickClear = () => {
    setLastRemoved([]);
    setRegions([]);
  };

  const handleClickPrevious = () => {
    setSelectedImage(selectedImage - 1);
  };

  const handleClickNext = () => {
    setSelectedImage(selectedImage + 1);
  };

  useEffect(() => {
    if (typeof selectedImage === "number" && imageRef[selectedImage]) {
      imageRef[selectedImage].scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedImage, imageRef]);

  return (
    <ToolbarWrapper>
      <ButtonIcon
        disabled={!(regions[selectedImage] && regions[selectedImage].length)}
        onClick={handleClickClear}
      >
        <DeleteIcon title="clear" role="button" />
      </ButtonIcon>
      <ButtonIcon
        disabled={!(regions[selectedImage] && regions[selectedImage].length)}
        onClick={handleClickUndo}
      >
        <UndoIcon title="undo" role="button" />
      </ButtonIcon>
      <ButtonIcon
        disabled={
          !(lastRemoved[selectedImage] && lastRemoved[selectedImage].length)
        }
        onClick={handleClickRedo}
      >
        <RedoIcon title="redo" role="button" />
      </ButtonIcon>
      <ButtonIcon disabled={selectedImage === 0} onClick={handleClickPrevious}>
        <PreviousIcon title="previous" role="button" />
      </ButtonIcon>
      <ButtonIcon
        disabled={selectedImage === imageList.length - 1}
        onClick={handleClickNext}
      >
        <NextIcon title="next" role="button" />
      </ButtonIcon>
    </ToolbarWrapper>
  );
};

export default Toolbar;
