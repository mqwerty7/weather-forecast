import React, { FunctionComponent, useState } from 'react';
import styles from './FeedbackForm.scss';
import { LocalStorageService } from '../../../services/localStorageService';

export const FeedbackForm: FunctionComponent<{ update: () => void }> = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setComment('');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    LocalStorageService.setFeedback({
      name: name,
      email: email,
      comments: comment,
      date: new Date().toLocaleString()
    });
    props.update();
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label className={styles.formLabel}>Name:</label>
        <br />
        <input
          type={'text'}
          className={styles.formInput}
          placeholder={'Name'}
          value={name}
          onChange={handleNameChange}
        />
      </p>
      <p>
        <label className={styles.formLabel}>Email:</label>
        <br />
        <input
          type={'text'}
          className={styles.formInput}
          placeholder={'Email'}
          value={email}
          onChange={handleEmailChange}
        />
      </p>
      <p>
        <label className={styles.formLabel}>Comment:</label>
        <br />
        <textarea
          className={`${styles.formInput} ${styles.formTextArea}`}
          placeholder={'Comment'}
          value={comment}
          onChange={handleCommentChange}
        />
      </p>
      <button type="submit" className={styles.btn}>
        Submit
      </button>
    </form>
  );
};
