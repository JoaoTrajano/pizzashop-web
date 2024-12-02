import { api } from '@/lib/axios'
import { useMutation } from '@tanstack/react-query'

export interface RegisterRestaurantsBody {
  restaurantName: string
  managerName: string
  email: string,
  phone: string
}
 async function registerRestaurants(body: RegisterRestaurantsBody) {
  await api.post('/restaurants', body)
}

export function useRegisterRestaurants() {
  return useMutation({
    mutationFn: registerRestaurants,
  })
}
