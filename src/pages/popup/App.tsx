import React from 'react'
import { getCoin } from '../../api/coin'
import { useQuery, UseQueryResult } from 'react-query'

const App = (): JSX.Element => {
  const coinQuery = (symbol: string): UseQueryResult<any, unknown> =>
    useQuery(`coin-${symbol}`, () => getCoin(symbol))

  const ethTest = coinQuery('ethereum')
  const btcTest = coinQuery('bitcoin')


  return (
    <div
      style={{
        background: '#2B2B2B',
        width: '200px',
        padding: '10px',
      }}
    >
      <div
        style={{
          background: '#4B5D67',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '10px',
          width: '100%',
          justifyContent: 'center',
          color: '#37E2D5',
          fontSize: '35px',
          height: '100px',
        }}
      >
        <h6 style={{ textShadow: '0px 0px 3px #37E2D5', margin: '10px', width: '100%' }}>
          {`ETH: `}
          {ethTest.data && ethTest.data.data.market_price_usd}
          {ethTest.isLoading && 'loading'}
          {ethTest.error && 'error'}
        </h6>
        <h6 style={{ textShadow: '0px 0px 3px #37E2D5', margin: '10px' }}>
          {`BTC: `}
          {btcTest.data && btcTest.data.data.market_price_usd}
          {btcTest.isLoading && 'loading'}
          {btcTest.error && 'error'}
        </h6>
      </div>
    </div>
  )
}

export default App
