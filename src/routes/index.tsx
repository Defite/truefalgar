import * as React from 'react'
import { Home } from '../containers'
import { BrowserRouter, Route } from 'react-router-dom'

export default function Routes() {
  return (
    <BrowserRouter>
        <Route path="/" component={ Home } />
    </BrowserRouter>
  )
}
