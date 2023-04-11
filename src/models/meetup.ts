import { Meetup } from '@prisma/client';

export type MeetupWithoutId = Omit<Meetup, 'id'>;
