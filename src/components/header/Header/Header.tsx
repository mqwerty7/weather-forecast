import React from 'react';
import styles from './Header.scss';
import { NavButton } from '../NavButton/NavButton';
import { ToggleButton } from '../ToggleButton/ToggleButton';
import { INavButtonProps } from '../../../Interfaces';
import '../ToggleButton/ToggleButton.scss';

const navButtonsProps: INavButtonProps[] = [
  { name: 'Weather', path: 'weather' },
  { name: 'Locations', path: 'locations' },
  { name: 'Information', path: 'information' },
  { name: 'Feedback', path: 'feedback' }
];

export const Header = () => {
  return (
    <header className={styles.pageHeader}>
      <div className={styles.leftSide}>
        <ToggleButton />
        <div className={styles.name}>WEATHER FORECAST</div>
      </div>
      <div className={styles.navBar}>
        {navButtonsProps.map(buttonProps => (
          <NavButton key={buttonProps.name} {...buttonProps} />
        ))}
      </div>
    </header>
  );
};
