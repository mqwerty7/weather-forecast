import React, { FunctionComponent } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styles from './SubNav.scss';
import { ISubNavProps } from '../../../Interfaces';

export const SubNav: FunctionComponent = () => {
  const { locationId } = useParams();
  const subNavProps: ISubNavProps[] = [
    { name: 'Current', path: `${locationId}/current` },
    { name: 'Hourly', path: `${locationId}/hourly` },
    { name: 'Daily', path: `${locationId}/daily` }
  ];
  return (
    <div className={styles.container}>
      {subNavProps.map(props => (
        <NavLink
          key={props.name}
          to={props.path}
          className={status => {
            return status.isActive ? styles.subNavLink + ' ' + styles.active : styles.subNavLink;
          }}
        >
          {props.name}
        </NavLink>
      ))}
    </div>
  );
};
