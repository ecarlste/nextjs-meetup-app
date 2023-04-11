import MeetupList from '@/components/meetups/MeetupList';
import { prisma } from '@/lib/prisma';
import { Meetup } from '@prisma/client';
import React from 'react';

function HomePage(props: { meetups: Meetup[] }) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  const meetups = await prisma.meetup.findMany();

  return {
    props: {
      meetups: meetups,
    },
  };
}

export default HomePage;
