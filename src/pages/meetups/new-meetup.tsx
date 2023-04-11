import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import { MeetupWithoutId } from '@/models/meetup';
import React from 'react';

function NewMeetup() {
  function addMeetupHandler(enteredMeetupData: MeetupWithoutId) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetup;
