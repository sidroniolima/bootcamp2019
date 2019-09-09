import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import {
  saveSuccess,
  saveFailure,
  fetchSuccess,
  fetchFailure,
} from './actions';

export function* saveMeetup({ payload }) {
  try {
    const { id, title, description, date, location } = payload.data;

    const response = yield call(
      id ? api.put : api.post,
      id ? `/meetups/${id}` : '/meetups',
      {
        id: id || null,
        title,
        description,
        date,
        location,
      }
    );

    toast.success('Meetup salvo com sucesso.');
    yield put(saveSuccess(response.data));
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível salvar o Meetup.');
    yield put(saveFailure());
  }
}

export function* fetchMeetup({ payload }) {
  try {
    const response = yield call(api.get, `/meetups/${payload.id}`);
    yield put(fetchSuccess(response.data));
  } catch (error) {
    toast.error('Não foi possível recuperar o Meetup.');
    yield put(fetchFailure());
  }
}

export default all([
  takeLatest('@meetup/SAVE_REQUEST', saveMeetup),
  takeLatest('@meetup/FETCH_REQUEST', fetchMeetup),
]);
