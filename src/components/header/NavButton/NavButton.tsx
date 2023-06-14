import React, { FunctionComponent } from 'react';
import { INavButtonProps } from '../../../Interfaces';
import styles from './NavButton.scss';
import { useNavigate } from 'react-router-dom';

export const NavButton: FunctionComponent<INavButtonProps> = ({ name, path }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <button className={styles.btn} onClick={handleClick}>
      {name}
    </button>
  );
};
