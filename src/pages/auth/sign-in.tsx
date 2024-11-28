import { ContentPage } from '@/components/ContentPage'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SignIn() {
  return (
    <ContentPage titlePage="Login">
      <div className="p-8">
        <div className="flex w-[340px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe as suas vendas pelo painel do parceiro!
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email"> Seu e-mail</Label>
              <Input id="email" type="email" />
            </div>
            <Button className="w-full" type="submit">
              Acessar Painel
            </Button>
          </div>
        </div>
      </div>
    </ContentPage>
  )
}
