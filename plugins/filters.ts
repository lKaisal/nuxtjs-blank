function normalizePrice(price: number) {
  const priceStr = String(price).split('') as any[]
  priceStr.splice(-3, 0, '&nbsp;')
  const priceFinal = priceStr.join('')

  return `₽&nbsp;${priceFinal}`
}

export { normalizePrice }
