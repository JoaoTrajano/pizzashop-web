import { useMutation, type UseMutationOptions } from '@tanstack/react-query'

import { api } from '@/lib/axios'

import type { GetManagedRestaurantResponse } from './get-managed-restaurant'

export interface UpdateManagerProfileBody {
  name: string
  description: string | null
}

async function updateManagerProfile(
  body: UpdateManagerProfileBody,
): Promise<void> {
  await api.put('/profile', body)
}

export function useUpdateManagerProfile(
  options?: UseMutationOptions<
    void,
    unknown,
    UpdateManagerProfileBody,
    { previousProfile: GetManagedRestaurantResponse | undefined }
  >,
) {
  return useMutation<
    void,
    unknown,
    UpdateManagerProfileBody,
    { previousProfile: GetManagedRestaurantResponse | undefined }
  >({
    mutationFn: updateManagerProfile,
    ...options,
  })
}
