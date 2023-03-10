import React from 'react';
import { NavigationBtn } from 'Components/Buttons';

import { NAVIGATION_LABELS } from 'Constents';

const MainNavigation: React.FunctionComponent = () => {
  return (<ul>
    {NAVIGATION_LABELS.map(pageName => (
      <li key={pageName}>
        <NavigationBtn type={pageName} />
      </li>
    ))}
  </ul>);
};

export default MainNavigation;
