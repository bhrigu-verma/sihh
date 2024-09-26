import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

export function useUser() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (status === 'authenticated' && session?.userId) {
      fetch(`/api/users/${session.userId}`)
        .then(res => res.json())
        .then(data => setUser(data));
    }
  }, [session, status]);

  return { user, isLoading: status === 'loading' };
}