import { FormProduct, Title } from '../../components'
import { useProductDetails } from './use-product-details'

export function ProductDetails() {
  const { form, isLoading, onSubmit } = useProductDetails()

  return (
    <div>
      <div className="mt-6 text-center">
        <Title>Detalhes do produto</Title>
      </div>
      <FormProduct
        form={form}
        onSubmit={onSubmit}
        pathClose="/"
        isLoading={isLoading}
      />
    </div>
  )
}
