import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { useRegisterRestaurants } from '@/api/register-restaurants'
import { ContentPage } from '@/components/content-page'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpFormSchema = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})
type SignUpFormType = z.infer<typeof signUpFormSchema>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormType>()

  const navigate = useNavigate()
  const { mutateAsync: registerRestaurant } = useRegisterRestaurants()

  async function handleSignUp(data: SignUpFormType) {
    try {
      await registerRestaurant({
        email: data.email,
        managerName: data.managerName,
        phone: data.phone,
        restaurantName: data.restaurantName,
      })
      toast.success('Restaurante cadastrado com sucesso!.', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      })
    } catch (error) {
      toast.error(
        'Houve um erro ao tentar cadsatrar o restaurante. Tente novamente.',
      )
    }
  }

  return (
    <ContentPage titlePage="Cadastro">
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer Login</Link>
        </Button>
        <div className="flex w-[340px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Crie uma conta grátis.
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e começe as suas vendas!
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName"> Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register('restaurantName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName"> Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email"> Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone"> Seu celular</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar cadastro
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com as{' '}
              <a className="underline underline-offset-4" href="">
                Polítcas de Privacidade
              </a>{' '}
              e{' '}
              <a className="underline underline-offset-4" href="">
                Termos de Uso
              </a>
            </p>
          </form>
        </div>
      </div>
    </ContentPage>
  )
}
