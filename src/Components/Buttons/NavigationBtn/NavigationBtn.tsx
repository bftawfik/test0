import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PagesType } from 'Types';
import { PAGES_URL_PATHS, DEFAULT_BUTTONS_LABELS } from 'Constents';
interface Props {
  type: PagesType
  label?: string
};
const NavigationBtn: React.FunctionComponent<Props> = ({ type, label }) => {
  const navigate = useNavigate();
  const onClickHandler: React.MouseEventHandler = (e) => {
    e.preventDefault();
    navigate(PAGES_URL_PATHS[type]);
  };
  return (<button onClick={onClickHandler}>{label ?? DEFAULT_BUTTONS_LABELS[type]}</button>);
};

export default NavigationBtn;
