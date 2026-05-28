import React, { useEffect, useRef } from "react"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"

import { devlog } from "./utils/log"
import Nav from "./Nav"
import { hydrate } from "./redux/modules/hydratation"

export function App(props) {
  devlog("App", props)
  const { store, history, hydratation, hydrate, options } = props

  const hasHydratedRef = useRef(false)
  useEffect(() => {
    if (!hasHydratedRef.current) {
      hasHydratedRef.current = true
      hydrate(store, options.hydratation)
    }
  })

  if (!hydratation.done) {
    return null
  }
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Nav />
      </ConnectedRouter>
    </Provider>
  )
}
