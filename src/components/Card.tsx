import React from 'react'
import { getCoin } from '../api/coin'
import { useQuery } from 'react-query'
interface prop {
  id?: string
  symbol: string
}
const Card = ({ symbol, id = symbol }: prop): JSX.Element => {
  const query = useQuery(`coin-${symbol}`, () => getCoin(symbol))
  const lIGTH_COLOR = '#EEEEEE'
  const lIGTH_BACKGROUND = '#222831'
  const DARK_COLOR = '#FFD369'
  const DARK_BACKGROUND = '#393E46'
  

  const [color, setColor] = React.useState(lIGTH_COLOR)
  const [backgroundColor, setBackgroundColor] = React.useState(lIGTH_BACKGROUND)
  const hover = (action: string): void => {
    if (action === 'in') {
      setColor(DARK_COLOR)
      setBackgroundColor(DARK_BACKGROUND)
    }
    if (action === 'out') {
      setColor(lIGTH_COLOR)
      setBackgroundColor(lIGTH_BACKGROUND)
    }
  }
  return (
    <div
      key={id}
      style={{
        width: 300,
        background: backgroundColor,
        display: 'flex',
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingRight: 25,
        transitionDuration: '0.3s',
        cursor: 'pointer',
      }}
      onMouseEnter={() => hover('in')}
      onMouseLeave={() => hover('out')}
    >
      <div>
        <div
          style={{
            textDecoration: 'none',
            color: color,
            textShadow: `0px 0px 5px ${color}`,
            transitionDuration: '0.3s',
            margin: 10,
            fontWeight: 200,
            fontSize: 15,
            display: 'flex',
            gap: 20,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              width: 130
            }}
          >
            <span style={{ opacity: 0.3 }}>{'Price : '}</span>
            <span style={{ opacity: 0.3 }}>
              {'Transactions 24h: '}
            </span>
          </div>
          <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            width: 70
          }}
          >
            <span>
              {query.data?.data.market_price_usd}
              {query.isLoading && 'loading'}
              {query.error && 'error'}
            </span>
            <span>
              {query.data?.data.transactions_24h}
              {query.isLoading && 'loading'}
              {query.error && 'error'}
            </span>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingTop: 6,
          width: 60,
        }}
      >
        <img
          src={`https://loutre.blockchair.io/assets/svg/chains/${symbol}.svg`}
          alt={symbol}
          width={40}
          height={40}
        />
      </div>
    </div>
  )
}

export default Card
