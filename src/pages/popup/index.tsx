import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { QueryClientProvider, QueryClient } from 'react-query'

console.log('popup script')

const root = document.querySelector('#root')
const queryClient = new QueryClient()

render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  root,
)
