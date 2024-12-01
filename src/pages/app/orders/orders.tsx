import { useGetOders } from '@/api/get-orders'
import { ContentPage } from '@/components/content-page'
import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { OrderTableFilters } from './order-table-filters'
import { OrderTableRow } from './order-table-row'

export function Orders() {
  const { data: result } = useGetOders()
  return (
    <ContentPage titlePage="Pedidos">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold -tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <OrderTableFilters />
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total do pedido</TableHead>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {result &&
                result.orders.map((order) => (
                  <OrderTableRow key={order.orderId} order={order} />
                ))}
            </TableBody>
          </Table>
        </div>
        <Pagination pageIndex={0} totalCount={105} perPage={10} />
      </div>
    </ContentPage>
  )
}
