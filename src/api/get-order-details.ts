import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from '@tanstack/react-query'

import { api } from '@/lib/axios'

export interface GetOrderDetailsParams {
  orderId: string
  isDialogDetailsOpen: boolean
}

export interface GetOrderDetailsResponse {
  id: string
  createdAt: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

async function getOrderDetails({
  orderId,
}: GetOrderDetailsParams): Promise<GetOrderDetailsResponse> {
  const response = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`)
  return response.data
}

export function useGetOrderDetails(
  params: GetOrderDetailsParams,
  options?: UseQueryOptions<GetOrderDetailsResponse, Error>,
): UseQueryResult<GetOrderDetailsResponse, Error> {
  return useQuery<GetOrderDetailsResponse, Error>({
    queryKey: ['orders-details', params.orderId],
    queryFn: async () => getOrderDetails(params),
    enabled: params.isDialogDetailsOpen,
    ...options,
  })
}
