import {all, put, takeLatest, call} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '~/services/api';

import {updateProfileSuccess, updateProfileFailure} from './actions';

export function* updateProfile({payload}) {
  try {
    const {name, email, avatar_id, ...rest} = payload.data;
    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, '/users', profile);

    yield put(updateProfileSuccess(response.data));
    Alert.alert('Sucesso!', 'Seu perfil foi atualizado.');
  } catch (error) {
    Alert.alert(
      'Falha na atualização do perfil!',
      'Não foi possível atualizar o perfil. Confira seus dados.',
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
