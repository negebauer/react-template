// Maybe check
// https://github.com/Gethyl/ReactReduxTestingUsingJestEnzyme/blob/master/__test__/Home.spec.js

import React from "react"
import createHistory from "history/createBrowserHistory"
import configureStore from "./redux/store"
import { shallow, mount } from "enzyme"
import toJson from "enzyme-to-json"
import _ from "lodash/fp/object"
import App from "./App"

let history
let initialState
let store
let options

beforeEach(() => {
  history = createHistory()
  initialState = { hydratation: { done: true } }
  store = configureStore(initialState, history)
  options = { hydratation: { blacklist: ["hydratation", "router"] } }
})

it("shallow renders without crashing", () => {
  shallow(<App store={store} options={options} history={history} />)
})

it("mount renders without crashing", () => {
  mount(<App store={store} options={options} history={history} />)
})

it("matches snapshot", () => {
  const wrapper = mount(
    <App store={store} options={options} history={history} />
  )
  expect(toJson(wrapper)).toMatchSnapshot()
})

it("renders children", () => {
  const wrapper = mount(
    <App store={store} options={options} history={history} />
  )
  expect(wrapper.children().exists()).toBeTruthy()
})

it("renders null when no hydratation", () => {
  const wrapper = mount(
    <App store={store} options={options} history={history} />
  )
  store.replaceReducer(state =>
    _.merge(state, { hydratation: { done: false } })
  )
  store.dispatch({ type: "" })
  expect(wrapper.children().exists()).toBeFalsy()
})
