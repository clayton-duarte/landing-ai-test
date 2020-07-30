import React, { FunctionComponent, useState } from "react";
import { Region } from "react-region-select";
import styled from "styled-components";
import {
  RiShareForwardLine as RedoIcon,
  RiDeleteBinLine as DeleteIcon,
} from "react-icons/ri";

import { useStateHook } from "../providers/state";
import ToolbarWrapper from "./ToolbarWrapper";
import SectionTitle from "./SectionTitle";

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

const Toolbar: FunctionComponent = () => {
  const [lastRemoved, setLastRemoved] = useState<Region[][]>([]);
  const { selectedImage, regions, setRegions } = useStateHook();

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

  return (
    <ToolbarWrapper>
      <SectionTitle>Tools:</SectionTitle>
      <ButtonIcon
        disabled={!regions[selectedImage]?.length}
        onClick={handleClickUndo}
      >
        <UndoIcon title="undo" role="button" />
      </ButtonIcon>
      <ButtonIcon
        disabled={!lastRemoved[selectedImage]?.length}
        onClick={handleClickRedo}
      >
        <RedoIcon title="redo" role="button" />
      </ButtonIcon>
      <ButtonIcon
        disabled={!regions[selectedImage]?.length}
        onClick={handleClickClear}
      >
        <DeleteIcon title="clear" role="button" />
      </ButtonIcon>
    </ToolbarWrapper>
  );
};

export default Toolbar;
