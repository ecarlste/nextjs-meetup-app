import MeetupDetail from '@/components/meetups/MeetupDetail';
import { Meetup } from '@prisma/client';
import React, { Fragment } from 'react';

const meetup: Meetup = {
  id: 'm1',
  title: 'A First Meetup',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Istanbul_asv2021-10_img11_Y%C4%B1ld%C4%B1z_Hamidiye_Mosque.jpg/2560px-Istanbul_asv2021-10_img11_Y%C4%B1ld%C4%B1z_Hamidiye_Mosque.jpg',
  address: '12345 Some Street, Some City, ST',
  description: 'This is a first meetup!',
};

function MeetupDetails() {
  return <MeetupDetail meetup={meetup} />;
}

export default MeetupDetails;
