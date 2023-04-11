import Link from 'next/link';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { Meetup } from '@prisma/client';

function MeetupItem(props: { meetup: Meetup }) {
  const { meetup } = props;
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
        </div>
        <div className={classes.actions}>
          <Link href={`/meetups/${meetup.id}`}>
            <button>Show Details</button>
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
