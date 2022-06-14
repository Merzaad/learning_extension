import React from 'react'
import Card from '../../components/Card'

const PopUp = (): JSX.Element => {
  return (
    <div
    style={{
      background: "#222831",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      gap: 5,
    }}
    >
      <Card symbol="ethereum" />
      <Card symbol="bitcoin" />
      <Card symbol="dogecoin" />

    </div>
  )
}

export default PopUp
