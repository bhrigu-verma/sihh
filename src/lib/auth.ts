import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next';

export async function isAuthenticated(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: 'Unauthorized' });
    return false;
  }
  return true;
}

export function hasRole(user, role) {
  return user.role === role;
}