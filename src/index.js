import React from "react"
import ReactDOM from "react-dom"
import createHistory from "history/createBrowserHistory"

import App from "./App"
import Api from "./Api"
import configureStore from "./redux/store"
import { devlog } from "./utils/log"

const history = createHistory()
const client = new Api(process.env.REACT_APP_API || "http://localhost:3000")

// Redux required objects
const initialState = {}
const store = configureStore(initialState, history, { client })

// App general settings
const options = { hydratation: { blacklist: ["hydratation", "router"] } }

devlog("index.js", "store", store, "options", options)

export default ReactDOM.render(
  <App store={store} options={options} history={history} />,
  document.getElementById("root") || document.createElement("root")
)
