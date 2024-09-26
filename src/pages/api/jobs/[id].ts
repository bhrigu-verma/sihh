import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import { getSession } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      const job = await prisma.job.findUnique({ where: { id: String(id) } });
      if (job) {
        res.status(200).json(job);
      } else {
        res.status(404).json({ error: 'Job not found' });
      }
      break;
    case 'PUT':
      const { title, description, budget } = req.body;
      const updatedJob = await prisma.job.update({
        where: { id: String(id) },
        data: { title, description, budget },
      });
      res.status(200).json(updatedJob);
      break;
    case 'DELETE':
      await prisma.job.delete({ where: { id: String(id) } });
      res.status(204).end();
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}