import React from 'react';
import { format } from 'date-fns';

import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import InputDate from './InputDate';

import { Container } from './styles';

export default function Meetup() {
  const dispatch = useDispatch();
  const loading = false;

  const initialData = {
    title: 'Teste',
    description: 'Teste',
    date: new Date(),
    location: 'São Paulo',
  };

  function handleSubmit(data) {
    // dispatch(updateProfileRequest(data));
    console.tron.log(data.date);
  }
  const schema = Yup.object().shape({
    title: Yup.string().required('Digite o título do evento'),
    description: Yup.string().required('Digite a descrição'),
    date: Yup.date().required('Digite a data do evento'),
    location: Yup.string().required('Digite a localização do meetup'),
  });

  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
        schema={schema}
        autocomplete="off"
        initialData={initialData}
      >
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />

        <InputDate placeholderText="Data do meetup" name="date" />
        <Input name="location" placeholder="Localização" />

        <button type="submit" disabled={loading}>
          {loading ? 'Aguarde...' : 'Salvar meetup'}
        </button>
      </Form>
    </Container>
  );
}
