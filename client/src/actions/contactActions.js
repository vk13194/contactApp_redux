import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from './types';
import axios from 'axios';

export const getContacts = () => async dispatch => {
  const res = await axios.get('http://localhost:5000/api');
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const getContact = _id => async dispatch => {
  const res = await axios.get(
    `http://localhost:5000/api/${_id}`
  );
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

export const deleteContact = _id => async dispatch => {
  try {
    await axios.delete(`http://localhost:5000/api/${_id}`);
    dispatch({
      type: DELETE_CONTACT,
      payload: _id
    });
  } catch (e) {
    dispatch({
      type: DELETE_CONTACT,
      payload: _id
    });
  }
};

export const addContact = contact => async dispatch => {
  const res = await axios.post(
    'http://localhost:5000/api',
    contact
  );
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};

export const updateContact = contact => async dispatch => {
  const res = await axios.put(
    `http://localhost:5000/api/${contact._id}`,
    contact
  );
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  });
};
