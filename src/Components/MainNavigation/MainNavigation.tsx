import React from "react";
import { ButtonGroup } from "@mui/material";
import { NavigationBtn } from "Components/Buttons";

import { NAVIGATION_LABELS } from "Constents";

const MainNavigation: React.FunctionComponent = () => {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      {NAVIGATION_LABELS.map((pageName) => (
        <NavigationBtn key={pageName} type={pageName} />
      ))}
    </ButtonGroup>
  );
};

export default MainNavigation;
