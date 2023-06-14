import { IFeedbackInfo } from '../Interfaces';

export const LocalStorageService = {
  setToken: (token: string): void => {
    localStorage.setItem('token', token);
  },

  getToken: (): string | null => {
    return localStorage.getItem('token');
  },

  setFeedback: (feedBack: IFeedbackInfo): void => {
    const localFeedback: IFeedbackInfo[] = LocalStorageService.getFeedback();
    localFeedback.push(feedBack);
    localStorage.setItem('feedback', JSON.stringify(localFeedback));
  },

  getFeedback: (): IFeedbackInfo[] => {
    const localFeedback = localStorage.getItem('feedback');

    if (localFeedback) {
      return JSON.parse(localFeedback);
    } else {
      return [];
    }
  }
};
