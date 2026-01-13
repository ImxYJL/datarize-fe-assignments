type Purchase = {
  product: string
  date: string
  price: number
  quantity: number
  imgSrc?: string
}

type Props = {
  purchase: Purchase
}

const PurchaseItem = ({ purchase }: Props) => {
  const subtotal = purchase.price * purchase.quantity

  return (
    <li className="flex gap-6 p-5 border border-border rounded-xl bg-card/50 hover:bg-muted/10 transition-all list-none">
      <img
        src={purchase.imgSrc || '/placeholder.svg'}
        alt={purchase.product}
        className="w-24 h-24 shrink-0 object-cover rounded-lg border border-border bg-muted"
      />

      <div className="flex-1 flex flex-col justify-between py-1">
        <div className="flex justify-between items-start">
          <h4 className="text-lg font-bold text-foreground">{purchase.product}</h4>
          <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded">
            {purchase.date}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-4">
          <div className="space-y-1">
            <span className="text-xs text-muted-foreground font-semibold">단가</span>
            <p className="text-base font-semibold text-foreground">₩{purchase.price.toLocaleString()}</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-muted-foreground font-semibold">수량</span>
            <p className="text-base font-semibold text-foreground">{purchase.quantity}</p>
          </div>
          <div className="text-right space-y-1">
            <span className="text-xs text-muted-foreground font-semibold">소계</span>
            <p className="text-lg font-bold text-primary">₩{subtotal.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default PurchaseItem
