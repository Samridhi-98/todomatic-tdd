/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App/App';
import TodoList from '../TodoList/TodoList';

describe('<App />', () => {
  let getByTestId;

  describe('clicking button to add item', () => {
    beforeEach(async () => {
      ({ getByTestId } = render(<App />));

      await userEvent.type(
        getByTestId('form-input'),
        'Buy milk',
      );
      userEvent.click(getByTestId('form-button'));
    });
    it('clears the text field', () => {
      expect(getByTestId('form-input').value).toEqual('');
    });
  });
});

describe('display item list', () => {
  let sendHandleDelete;
  let sendItem = ['Buy milk'];
  let getByTestId;
  beforeEach(() => {
    sendHandleDelete = jest.fn().mockName('sendHandleDelete');
    ({ getByTestId } = render(<TodoList item={sendItem} delete={sendHandleDelete} />));
  });
  it('calls the delete handler', () => {
    fireEvent.click(getByTestId('delete-button', { selector: 'p' }));
    expect(sendHandleDelete).toHaveBeenCalled();
  });
});