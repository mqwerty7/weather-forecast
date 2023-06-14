import React from 'react';
import { render, screen } from '@testing-library/react';
import { FeedbackCard } from './FeedbackCard';
import { IFeedbackInfo } from '../../../Interfaces';

const testIds = {
  feedbackName: 'feedback-name',
  feedbackEmail: 'feedback-email',
  feedbackDate: 'feedback-date',
  feedbackComment: 'feedback-comment'
};
const info: IFeedbackInfo = {
  name: 'name',
  email: 'email',
  date: 'date',
  comments: 'comment'
};

describe('FeedbackCard', () => {
  it('should render component with provided data', () => {
    render(
      <FeedbackCard comments={info.comments} date={info.date} email={info.email} name={info.name} />
    );

    const nameEl = screen.getByTestId(testIds.feedbackName);
    const emailEl = screen.getByTestId(testIds.feedbackEmail);
    const dateEl = screen.getByTestId(testIds.feedbackDate);
    const commentEl = screen.getByTestId(testIds.feedbackComment);

    expect(nameEl).toHaveTextContent(info.name);
    expect(emailEl).toHaveTextContent(info.email);
    expect(dateEl).toHaveTextContent(info.date);
    expect(commentEl).toHaveTextContent(info.comments);
  });
});
