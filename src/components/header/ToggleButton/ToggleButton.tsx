import React, { FunctionComponent, useEffect } from 'react';
import styles from './ToggleButton.scss';
import { useSelector, useDispatch } from 'react-redux';
import { set } from '../../../redux/slice';

export const ToggleButton: FunctionComponent = () => {
  const theme = useSelector((state: { theme: string }) => state.theme);
  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    dispatch(set(next));
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={styles.toggleContainer}>
      <input
        type="checkbox"
        id="dark-mode"
        checked={theme === 'dark'}
        onChange={handleChangeTheme}
      />
      <label htmlFor="dark-mode" />
    </div>
  );
};
