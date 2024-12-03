import { useMutation, type UseMutationOptions } from '@tanstack/react-query'

import { api } from '@/lib/axios'

export interface CancelOrderParams {
  orderId: string
}

async function cancelOrder(params: CancelOrderParams): Promise<void> {
  await api.patch(`/profile/${params.orderId}/cancel`)
}

export function useCancelOrder(
  options?: UseMutationOptions<void, unknown, CancelOrderParams>,
) {
  return useMutation<void, unknown, CancelOrderParams>({
    mutationFn: cancelOrder,
    ...options,
  })
}
