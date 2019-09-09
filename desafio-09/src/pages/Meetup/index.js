import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';

import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import InputDate from './InputDate';

import { Container } from './styles';

import { saveRequest, fetchRequest } from '~/store/modules/meetup/actions';

export default function Meetup({ match }) {
  const dispatch = useDispatch();
  const meetup = useSelector(state => state.meetup.meetup);
  const loading = useSelector(state => state.meetup.loading);

  useEffect(() => {
    async function fetchData() {
      const { id } = match.params;
      console.tron.log(id);
      await dispatch(fetchRequest(id));
    }

    fetchData();
  }, [dispatch, match.params]);

  function handleSubmit(data) {
    const { id } = match.params;

    if (id) {
      data.id = id;
    }

    dispatch(saveRequest(data));
  }
  const schema = Yup.object().shape({
    title: Yup.string().required('Digite o título do evento'),
    description: Yup.string().required('Digite a descrição'),
    date: Yup.date().required('Digite a data do evento'),
    location: Yup.string().required('Digite a localização do meetup'),
  });

  return (
    <Container>
      {!loading && (
        <Form
          onSubmit={handleSubmit}
          schema={schema}
          autoComplete="off"
          initialData={meetup}
        >
          <Input name="title" placeholder="Título do Meetup" />
          <Input
            multiline
            name="description"
            defaultValue={meetup.description}
            placeholder="Descrição completa"
          />

          <InputDate
            placeholderText="Data do meetup"
            name="date"
            defaultValue={meetup.date}
          />
          <Input name="location" placeholder="Localização" />

          <button type="submit" disabled={loading}>
            {loading ? 'Aguarde...' : 'Salvar meetup'}
          </button>
        </Form>
      )}
    </Container>
  );
}

Meetup.defaultProps = {
  match: {},
};
