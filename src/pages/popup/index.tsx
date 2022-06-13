import React from 'react'
import { render } from 'react-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import PopUp from './PopUp'

const root = document.querySelector('#root')
const queryClient = new QueryClient()

render(
  <QueryClientProvider client={queryClient}>
      <PopUp />
  </QueryClientProvider>,
  root,
)
