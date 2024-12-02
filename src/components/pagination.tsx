import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

export interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
  changePage: (pageIndex: number) => Promise<void> | void
}

export function Pagination({
  totalCount,
  perPage,
  pageIndex,
  changePage,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} items(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="flex text-sm font-medium">
          Página {pageIndex + 1} de {totalCount}
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => changePage(0)}
            variant="outline"
            className="h-4 w-4 p-4"
            disabled={pageIndex === 0}
          >
            <ChevronsLeft className="h-2 w-2" />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button
            onClick={() => changePage(pageIndex - 1)}
            variant="outline"
            className="h-4 w-4 p-4"
            disabled={pageIndex === 0}
          >
            <ChevronLeft className="h-2 w-2" />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button
            onClick={() => changePage(pageIndex + 1)}
            variant="outline"
            className="h-4 w-4 p-4"
            disabled={pages <= pageIndex + 1}
          >
            <ChevronRight className="h-2 w-2" />
            <span className="sr-only">Próxima paǵina</span>
          </Button>

          <Button
            onClick={() => changePage(pages - 1)}
            variant="outline"
            className="h-4 w-4 p-4"
            disabled={pages <= pageIndex + 1}
          >
            <ChevronsRight className="h-2 w-2" />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
