import React from "react";
import { useNavigate } from "react-router-dom";
import { PagesType } from "Types";
import {
  PAGES_URL_PATHS,
  DEFAULT_BUTTONS_LABELS,
  BUTTONS_VARIANTS,
} from "Constents";
import { Button } from "@mui/material";

interface Props {
  type: PagesType;
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
const NavigationBtn: React.FunctionComponent<Props> = ({
  type,
  label,
  startIcon,
  endIcon,
}) => {
  const navigate = useNavigate();
  const onClickHandler: React.MouseEventHandler = (e) => {
    e.preventDefault();
    navigate(PAGES_URL_PATHS[type]);
  };
  return (
    <Button
      variant={BUTTONS_VARIANTS.OUTLINED}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClickHandler}
    >
      {label ?? DEFAULT_BUTTONS_LABELS[type]}
    </Button>
  );
};

export default NavigationBtn;
