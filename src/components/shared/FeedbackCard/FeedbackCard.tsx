import React, { FunctionComponent } from 'react';
import styles from './FeedbackCard.scss';
import { IFeedbackInfo } from '../../../Interfaces';

export const FeedbackCard: FunctionComponent<IFeedbackInfo> = feedbackInfo => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <div className={styles.name} data-testid="feedback-name">
            {feedbackInfo.name}
          </div>
          <div className={styles.email} data-testid="feedback-email">
            {feedbackInfo.email}
          </div>
        </div>
        <div className={styles.date} data-testid="feedback-date">
          {feedbackInfo.date}
        </div>
      </div>
      <div data-testid="feedback-comments">{feedbackInfo.comments}</div>
    </div>
  );
};
