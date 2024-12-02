import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { date: '10/12', revenue: 1200 },
  { date: '11/12', revenue: 1500 },
  { date: '12/12', revenue: 1800 },
  { date: '13/12', revenue: 2000 },
  { date: '14/12', revenue: 1700 },
  { date: '15/12', revenue: 1600 },
  { date: '16/12', revenue: 1900 },
  { date: '17/12', revenue: 2100 },
  { date: '18/12', revenue: 2200 },
  { date: '19/12', revenue: 2300 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-end justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no períodwwo</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <Line type="linear" strokeWidth={2} dataKey="revenue" />
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
