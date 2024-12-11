import { Link } from 'react-router-dom'
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../index'
import { UseFormReturn } from 'react-hook-form'
import { ProductSchemaProps } from './product-schema'
import { colorsPhone } from '@/constants/colors-phone'
import { useEffect } from 'react'
import { formatDateToString } from '@/utils'

interface FormProductProps {
  form: UseFormReturn<ProductSchemaProps>
  onSubmit: (data: ProductSchemaProps) => void
  pathClose: string
  buttonText?: string
  isLoading?: boolean
}

export function FormProduct(data: FormProductProps) {
  const {
    form,
    pathClose,
    buttonText = 'SALVAR',
    isLoading = false,
    onSubmit,
  } = data

  const dateValue = form.watch('date')
  useEffect(() => {
    form.setValue('date', formatDateToString(dateValue))
  }, [dateValue])

  const endDateValue = form.watch('endDate')
  useEffect(() => {
    form.setValue('endDate', formatDateToString(endDateValue))
  }, [endDateValue])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Modelo</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Modelo do aparelho"
                    {...field}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Marca</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Marca do aparelho"
                    {...field}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cor</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Cor do aparelho" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {colorsPhone.map((color) => (
                      <SelectItem value={color.color} key={color.id}>
                        {color.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preço</FormLabel>
                <FormControl>
                  <Input
                    placeholder="R$"
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Início das vendas</FormLabel>
                <FormControl>
                  <Input placeholder="dd/mm/aaaa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fim das vendas</FormLabel>
                <FormControl>
                  <Input placeholder="dd/mm/aaaa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 items-center justify-end mt-8">
          <Link to={pathClose} className="w-full sm:w-fit">
            <Button type="button" className="w-full sm:w-fit">
              VOLTAR
            </Button>
          </Link>
          <Button
            type="submit"
            isLoading={isLoading}
            className="w-full sm:w-fit"
          >
            {buttonText}
          </Button>
        </div>
      </form>
    </Form>
  )
}
