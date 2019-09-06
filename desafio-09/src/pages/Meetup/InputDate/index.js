import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { DatePicker } from './styles';

export default function InputDate({ name, placeholderText }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <DatePicker
        placeholderText={placeholderText}
        locale="pt-BR"
        timeIntervals={60}
        timeCaption="Hora"
        dateCaption="Data"
        dateFormat="dd/MM/yyyy HH:mm"
        name={fieldName}
        showTimeSelect
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
      />
      {error && <span>{error}</span>}
    </>
  );
}

InputDate.propTypes = {
  name: PropTypes.string,
  placeholderText: PropTypes.string,
};

InputDate.defaultProps = {
  name: '',
  placeholderText: 'Digite a data',
};
