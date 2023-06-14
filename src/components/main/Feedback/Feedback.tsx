import React, { FunctionComponent, useEffect, useState } from 'react';
import styles from './Feedback.scss';
import { FeedbackCard } from '../../shared/FeedbackCard/FeedbackCard';
import { IFeedbackInfo } from '../../../Interfaces';
import { FeedbackForm } from '../../shared/FeedbackForm/FeedbackForm';
import { LocalStorageService } from '../../../services/localStorageService';

export const Feedback: FunctionComponent = () => {
  const [feedbackInfoArray, setFeedbackInfo] = useState<IFeedbackInfo[]>([]);
  const updateFeedbackList = () => {
    setFeedbackInfo(LocalStorageService.getFeedback());
  };
  useEffect(() => {
    updateFeedbackList();
  }, []);
  const formProps = {
    update: updateFeedbackList
  };
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <FeedbackForm {...formProps} />
      </div>
      <div className={styles.feedbackList}>
        {feedbackInfoArray.length > 0 &&
          feedbackInfoArray.map(feedbackInfo => {
            return <FeedbackCard key={feedbackInfo.date} {...feedbackInfo} />;
          })}
      </div>
    </div>
  );
};
