import MeetupDetail from '@/components/meetups/MeetupDetail';
import { prisma } from '@/lib/prisma';
import { Meetup } from '@prisma/client';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React, { Fragment } from 'react';

function MeetupDetails(props: { meetup: Meetup }) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetup.title}</title>
        <meta name="description" content={props.meetup.description}></meta>
      </Head>
      <MeetupDetail meetup={props.meetup} />
    </Fragment>
  );
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

  return {
    paths,
    fallback: false,
  };
}

export default MeetupDetails;
