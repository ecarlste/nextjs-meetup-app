import MeetupList from '@/components/meetups/MeetupList';
import { Meetup } from '@prisma/client';
import React from 'react';

const fakeMeetups: Meetup[] = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Istanbul_asv2021-10_img11_Y%C4%B1ld%C4%B1z_Hamidiye_Mosque.jpg/2560px-Istanbul_asv2021-10_img11_Y%C4%B1ld%C4%B1z_Hamidiye_Mosque.jpg',
    address: '12345 Some Street, Some City, ST',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Istanbul_asv2021-10_img11_Y%C4%B1ld%C4%B1z_Hamidiye_Mosque.jpg/2560px-Istanbul_asv2021-10_img11_Y%C4%B1ld%C4%B1z_Hamidiye_Mosque.jpg',
    address: '12345 Some Street, Some City, ST',
    description: 'This is a second meetup!',
  },
];

function HomePage() {
  return <MeetupList meetups={fakeMeetups} />;
}

export default HomePage;
