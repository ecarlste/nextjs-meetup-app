import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import { MeetupWithoutId } from '@/models/meetup';
import { useRouter } from 'next/router';
import React from 'react';

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

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetup;
