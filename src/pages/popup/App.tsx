import React from 'react'

const App = (): JSX.Element => {
  const [time, setTime] = React.useState('')

  // a function that returns time in a format of hh:mm:ss
  // using Copilot AI

  const getTime = (): string => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    return `${hours}:${minutes}:${seconds}`
  }
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime())
    }, 1000)
    return () => clearInterval(interval)
  })
  return (
    <div
      style={{
        width: '200px',
        padding: '0px',
      }}
    >
      <div
        style={{
          background: 'gray',
          display: 'flex',
          borderRadius: '10px',
          width: '100%',
          justifyContent: 'center',
          color: 'white',
          fontSize: '30px',
        }}
      >
        <h6 style={{ textShadow: '0px 0px 3px white' }}>{time}</h6>
      </div>
    </div>
  )
}

export default App
