import React from 'react'
import { getCoin } from '../api/coin'
import { useQuery } from 'react-query'
interface prop {
  id?: string
  symbol: string
}
const Card = ({ symbol, id = symbol }: prop): JSX.Element => {
  const query = useQuery(`coin-${symbol}`, () => getCoin(symbol))
  const floor = (num: string): number => Math.floor(Number(num))
  const [color, setColor] = React.useState('#37E2D5')
  const [backgroundColor, setBackgroundColor] = React.useState('#1B2430')
  const hover = (action: string): void => {
    if (action === 'in') {
      setColor('#ECE5C7')
      setBackgroundColor('#354259')
    }
    if (action === 'out') {
      setColor('#37E2D5')
      setBackgroundColor('#1B2430')
    }
  }
  return (
    <div
      style={{
        background: '#2B2B2B',
        minWidth: '150px',
        padding: '5px',
      }}
      key={id}
    >
      <div
        style={{
          background: backgroundColor,
          display: 'flex',
          borderRadius: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          border: `1px solid ${color}`,
          padding: 10,
          paddingRight: 25,
          transitionDuration: '0.3s',
          cursor: 'pointer',
        }}
        onMouseEnter={() => hover('in')}
        onMouseLeave={() => hover('out')}
      >
        <div>
          <a
            href={`https://blockchair.com/${symbol}`}
            target=""
            rel="noreferrer"
            style={{
              textDecoration: 'none',
              color: color,
              textShadow: `0px 0px 5px ${color}`,
              transitionDuration: '0.3s',
              margin: 10,
              width: '100%',
              fontWeight: 200,
              fontSize: 30,
            }}
          >
            {query.data && floor(query.data.data.market_price_usd)}
            {query.isLoading && 'loading'}
            {query.error && 'error'}
          </a>
        </div>
        <div
          style={{
            paddingTop: 6,
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
    </div>
  )
}

export default Card
