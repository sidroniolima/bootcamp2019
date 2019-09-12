import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import { fetchOrganizingSuccess, fetchOrganizingFailure } from './actions';

export function* fetchOrganizingMeetup() {
  try {
    const response = yield call(api.get, '/organizing');

    const data = {
      ...response.data,
      formattedDate: format(parseISO(response.data.date), 'dd/MM/yyyy HH:mm'),
    };

    yield put(fetchOrganizingSuccess(response.data));
  } catch (error) {
    console.tron.error(error);
    toast.error('Não foi possível recuperar os Meetups.');
    yield put(fetchOrganizingFailure());
  }
}

export default all([
  takeLatest('@organizing/FETCH_ORGANIZING_REQUEST', fetchOrganizingMeetup),
]);
