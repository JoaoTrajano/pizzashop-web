export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

export interface OrderStatusProps {
  status: OrderStatus
}

const ordersStatusMap: Record<OrderStatus, string> = {
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  pending: 'Pendente',
  processing: 'Em preparo',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span className="h-2 w-2 rounded-full bg-slate-400" />
      )}
      {status === 'canceled' && (
        <span className="h-2 w-2 rounded-full bg-rose-500" />
      )}
      {status === 'delivered' && (
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
      )}
      {['delivering', 'processing'].includes(status) && (
        <span className="h-2 w-2 rounded-full bg-amber-500" />
      )}
      <span className="font-mediu text-muted-foreground">
        {ordersStatusMap[status]}
      </span>
    </div>
  )
}
