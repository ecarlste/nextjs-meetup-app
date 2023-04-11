import { prisma } from '@/lib/prisma';
import { MeetupWithoutId } from '@/models/meetup';
import { Meetup } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse<Meetup>) {
  const { body, method } = req;
  const meetup = body as MeetupWithoutId;

  console.log(meetup);

  switch (method) {
    case 'POST':
      const createdMeetup = await prisma.meetup.create({ data: meetup });

      console.log('Meetup Created...');
      console.log(createdMeetup);

      res.status(201).json(createdMeetup);
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default handler;
