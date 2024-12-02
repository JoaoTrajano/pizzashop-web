import { useMutation } from '@tanstack/react-query'

import { api } from '@/lib/axios'

export interface SignInBody {
  email: string
}
async function signIn({ email }: SignInBody) {
  await api.post('/authenticate', { email })
}

export function useAuthentication() {
  return useMutation({
    mutationFn: signIn,
  })
}
