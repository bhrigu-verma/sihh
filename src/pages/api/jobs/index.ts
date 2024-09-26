import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  switch (req.method) {
    case 'GET':
      const jobs = await prisma.job.findMany();
      res.status(200).json(jobs);
      break;
    case 'POST':
      const { title, description, budget } = req.body;
      const newJob = await prisma.job.create({
        data: {
          title,
          description,
          budget,
          clientId: session.userId,
        },
      });
      res.status(201).json(newJob);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}