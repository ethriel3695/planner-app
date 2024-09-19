import React from 'react';
import { redirect } from 'next/navigation';
import { getUser } from '../../actions/user';
import { getEvents } from '../../actions/events';
import Planner from '../../../components/ui/Planner';

async function getData() {
  const user = await getUser();
  const events = await getEvents();
  if (!events) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return {
    props: { events, user },
    revalidate: 10,
  };
}

export default async function Page({ currentDate = new Date() }) {
  const { props } = await getData();
  const { events, user } = props;
  console.log(user);
  if (!user.user) {
    redirect('/');
  }
  return <Planner currentDate={currentDate} user={user} events={events} />;
}
