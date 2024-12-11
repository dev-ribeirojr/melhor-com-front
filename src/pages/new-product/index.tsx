import { FormProduct, Title } from '@/components'
import { useNewProduct } from './use-new-product'

export function NewProduct() {
  const { form, onSubmit } = useNewProduct()

  return (
    <div>
      <div className="mt-6 text-center">
        <Title>Registrar novo produto</Title>
      </div>
      <FormProduct
        form={form}
        onSubmit={onSubmit}
        pathClose="/"
        buttonText="REGISTRAR"
      />
    </div>
  )
}
