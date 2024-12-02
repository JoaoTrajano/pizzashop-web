import { ContentPage } from '@/components/content-page'

import { MounthRevenueCard } from './mounth-revenue-card'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <ContentPage titlePage="Dashboard">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold -tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MounthRevenueCard />
          <MounthRevenueCard />
          <MounthRevenueCard />
          <MounthRevenueCard />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
        </div>
      </div>
    </ContentPage>
  )
}
