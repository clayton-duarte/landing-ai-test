import React, { FunctionComponent } from "react";
import {
  RiShareForwardLine as RedoIcon,
  RiDeleteBinLine as DeleteIcon,
  RiFile2Line as NewIcon,
} from "react-icons/ri";

import styled from "styled-components";

import ToolbarWrapper from "./ToolbarWrapper";
import SectionTitle from "./SectionTitle";

const UndoIcon = styled(RedoIcon)`
  transform: scaleX(-1);
`;

const Toolbar: FunctionComponent = () => {
  return (
    <ToolbarWrapper>
      <SectionTitle>Tools:</SectionTitle>
      <NewIcon title="new" role="button" />
      <UndoIcon title="undo" role="button" />
      <RedoIcon title="redo" role="button" />
      <DeleteIcon title="delete" role="button" />
    </ToolbarWrapper>
  );
};

export default Toolbar;
