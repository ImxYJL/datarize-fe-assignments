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
    <li className="flex gap-6 p-5 border border-border rounded-xl bg-card/50 hover:bg-muted/10 transition-all">
      <img
        src={purchase.imgSrc}
        alt={purchase.product}
        className="w-24 h-24 shrink-0 object-cover rounded-lg border border-border bg-muted"
      />

      <div className="flex-1 flex flex-col justify-between py-1">
        {/* 상단: 제품명과 날짜 */}
        <div className="flex justify-between items-start">
          <h4 className="text-xl font-bold tracking-tight ">{purchase.product}</h4>
          <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded">{purchase.date}</span>
        </div>

        {/* 하단: 상세 금액 정보 */}
        <div className="grid grid-cols-3 gap-8 mt-4">
          <div className="space-y-1">
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">단가</span>
            <p className="text-lg font-semibold font-mono">₩{purchase.price.toLocaleString()}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">수량</span>
            <p className="text-lg font-semibold font-mono">{purchase.quantity}</p>
          </div>
          <div className="text-right space-y-1">
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">소계</span>
            <p className="text-xl font-bold text-primary font-mono">₩{subtotal.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default PurchaseItem
