const getCoin = async (coin: string): Promise<any> => {
  const coinQuery = await fetch(`https://api.blockchair.com/${coin}/stats`)
  return coinQuery.json()
}

export {getCoin}
