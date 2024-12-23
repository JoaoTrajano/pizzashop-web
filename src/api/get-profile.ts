import { useQuery } from '@tanstack/react-query'

import { api } from '@/lib/axios'

export interface GetProfileResponse {
  id: string
  name: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}
async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')
  return response.data
}

export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity,
  })
}
