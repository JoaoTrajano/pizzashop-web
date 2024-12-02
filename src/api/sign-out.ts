import { useMutation, type UseMutationOptions } from '@tanstack/react-query'

import { api } from '@/lib/axios'

async function signOut() {
  await api.post('/sign-out')
}

export function useSingOut(options?: UseMutationOptions<void, unknown, void>) {
  return useMutation({
    mutationFn: signOut,
    ...options,
  })
}
