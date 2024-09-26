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
      const proposal = await prisma.proposal.findUnique({ where: { id: String(id) } });
      if (proposal) {
        res.status(200).json(proposal);
      } else {
        res.status(404).json({ error: 'Proposal not found' });
      }
      break;
    case 'PUT':
      const { status } = req.body;
      const updatedProposal = await prisma.proposal.update({
        where: { id: String(id) },
        data: { status },
      });
      res.status(200).json(updatedProposal);
      break;
    case 'DELETE':
      await prisma.proposal.delete({ where: { id: String(id) } });
      res.status(204).end();
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}