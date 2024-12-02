import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from '@tanstack/react-query'

import { api } from '@/lib/axios'

export interface GetOrdersParams {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export interface GetOrdersResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

async function getOrders({
  pageIndex,
  customerName,
  orderId,
  status,
}: GetOrdersParams): Promise<GetOrdersResponse> {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
      customerName,
      orderId,
      status,
    },
  })
  return response.data
}

export function useGetOrders(
  params: GetOrdersParams,
  options?: UseQueryOptions<GetOrdersResponse, Error>,
): UseQueryResult<GetOrdersResponse, Error> {
  return useQuery<GetOrdersResponse, Error>({
    queryKey: ['orders', params],
    queryFn: () => getOrders(params),
    ...options,
  })
}
