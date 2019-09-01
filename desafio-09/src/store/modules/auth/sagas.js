import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const { user, token } = response.data;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    console.tron.log(error);
    yield put(signInFailure());

    toast.error('Não foi possível logar, verifique o email e a senha.');
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
