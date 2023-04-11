import MeetupDetail from '@/components/meetups/MeetupDetail';
import { prisma } from '@/lib/prisma';
import { Meetup } from '@prisma/client';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import React, { Fragment } from 'react';

function MeetupDetails(props: { meetup: Meetup }) {
  return <MeetupDetail meetup={props.meetup} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const meetupId = context.params?.meetupId as string;

  console.log(`meetupId: ${meetupId}`);
  const meetup = await prisma.meetup.findFirstOrThrow({
    where: { id: meetupId },
  });

  return {
    props: { meetup },
  };
}

export async function getStaticPaths() {
  const meetups = await prisma.meetup.findMany();

  const paths = meetups.map((meetup) => {
    return {
      params: {
        meetupId: meetup.id,
      },
    };
  });

  console.log('*** paths ***');
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export default MeetupDetails;
