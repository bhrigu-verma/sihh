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
      const user = await prisma.user.findUnique({
        where: { id: String(id) },
        select: { id: true, name: true, email: true, role: true },
      });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
      break;
    case 'PUT':
      const { name, email } = req.body;
      const updatedUser = await prisma.user.update({
        where: { id: String(id) },
        data: { name, email },
      });
      res.status(200).json(updatedUser);
      break;
    case 'DELETE':
      await prisma.user.delete({ where: { id: String(id) } });
      res.status(204).end();
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}