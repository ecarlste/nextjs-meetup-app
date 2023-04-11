import MeetupList from '@/components/meetups/MeetupList';
import { prisma } from '@/lib/prisma';
import { Meetup } from '@prisma/client';
import Head from 'next/head';
import React, { Fragment } from 'react';

function HomePage(props: { meetups: Meetup[] }) {
  return (
    <Fragment>
      <Head>
        <title>NextJS Meetup App</title>
        <meta
          name="description"
          content="Browse, join and create NextJS meetup groups!!!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
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
