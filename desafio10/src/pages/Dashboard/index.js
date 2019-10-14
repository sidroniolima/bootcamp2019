import React, {useState, useEffect} from 'react';
import api from '~/services/api';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';
import DateInput from '~/components/DateInput';

import {Container, MeetupList} from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get(`/meetups`, {
        params: {
          date,
          page: 1,
        },
      });

      setMeetups(response.data);
    }

    loadMeetups();
  }, [date]);

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={date => setDate(date)} />
        <MeetupList
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Meetup data={item} />}
        />
      </Container>
    </Background>
  );
}
