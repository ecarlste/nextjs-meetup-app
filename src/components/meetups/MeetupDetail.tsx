import { Meetup } from '@prisma/client';
import React, { Fragment as section } from 'react';
import classes from './MeetupDetail.module.css';

function MeetupDetail(props: { meetup: Meetup }) {
  const { meetup } = props;

  return (
    <section className={classes.detail}>
      <img src={meetup.image} />
      <h1>{meetup.title}</h1>
      <address>{meetup.address}</address>
      <p>{meetup.description}</p>
    </section>
  );
}

export default MeetupDetail;
