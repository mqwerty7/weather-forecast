import React, { FunctionComponent } from 'react';
import styles from './ErrorPage.scss';

export const ErrorPage: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.status}>404</div>
      <div>Page not found</div>
    </div>
  );
};
