import { useMutation, type UseMutationOptions } from '@tanstack/react-query'

import { api } from '@/lib/axios'

export interface UpdateManagerProfileBody {
  name: string
  description: string
}

async function updateManagerProfile(
  body: UpdateManagerProfileBody,
): Promise<void> {
  await api.put('/profile', body)
}

export function useUpdateManagerProfile(
  options?: UseMutationOptions<void, unknown, UpdateManagerProfileBody>,
) {
  return useMutation<void, unknown, UpdateManagerProfileBody>({
    mutationFn: updateManagerProfile,
    ...options,
  })
}
