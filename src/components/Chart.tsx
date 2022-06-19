import React from 'react'
import { AdvancedChart } from 'react-tradingview-embed'
const Chart = (): JSX.Element => {
  return <div>
    <AdvancedChart widgetProps={{ "theme": 'dark', "symbol" : "BTCUSDT" }} />
    <p>hi</p>
  </div>
}

export default Chart
