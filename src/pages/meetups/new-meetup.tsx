import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import { MeetupWithoutId } from '@/models/meetup';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

function NewMeetup() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData: MeetupWithoutId) {
    const response = await fetch('/api/meetups', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    router.push('/');
  }

  return (
    <Fragment>
      <Head>
        <title>Create a NextJS Meetup</title>
        <meta
          name="description"
          content="Create a new NextJS meetup to expand your profressional network!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetup;
