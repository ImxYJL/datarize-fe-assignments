import { Purchase } from '@/types/dashboard'

type PurchaseItemProps = {
  purchase: Purchase
}

const PurchaseItem = ({ purchase }: PurchaseItemProps) => {
  const subtotal = purchase.price * purchase.quantity

  return (
    <li className="flex gap-5 p-4 border border-border/50 rounded-xl bg-muted/20 hover:bg-muted/40 transition-all list-none">
      {/* 썸네일 */}
      <div className="w-20 h-20 shrink-0 overflow-hidden rounded-lg border border-border/60 bg-white">
        <img
          src={purchase.imgSrc}
          alt={purchase.product}
          className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between py-0.5">
        <div className="flex justify-between items-start">
          <h4 className="text-base font-bold text-foreground tracking-tight">{purchase.product}</h4>
          <span className="text-[11px] font-mono text-muted-foreground bg-background border border-border/40 px-2 py-0.5 rounded shadow-sm">
            {purchase.date}
          </span>
        </div>

        <div className="flex items-end justify-between mt-2">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">단가</span>
              <p className="text-sm font-semibold text-foreground">₩{purchase.price.toLocaleString()}</p>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">수량</span>
              <p className="text-sm font-semibold text-foreground">{purchase.quantity}개</p>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">소계</span>
            <p className="text-base font-bold text-primary">₩{subtotal.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default PurchaseItem
