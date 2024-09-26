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
      const proposals = await prisma.proposal.findMany({
        where: { freelancerId: session.userId },
      });
      res.status(200).json(proposals);
      break;
    case 'POST':
      const { jobId, coverLetter, proposedAmount } = req.body;
      const newProposal = await prisma.proposal.create({
        data: {
          jobId,
          freelancerId: session.userId,
          coverLetter,
          proposedAmount,
        },
      });
      res.status(201).json(newProposal);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}