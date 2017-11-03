// Maybe check
// https://github.com/Gethyl/ReactReduxTestingUsingJestEnzyme/blob/master/__test__/Home.spec.js

import React from "react"
import createHistory from "history/createBrowserHistory"
import configureStore from "./redux/store"
import { shallow, mount, render } from "enzyme"
import toJson from "enzyme-to-json"
import { App } from "./App"

let history
let initialState
let store
let options
let defaultProps
let hydrate

beforeEach(() => {
  history = createHistory()
  initialState = { hydratation: { done: true } }
  store = configureStore(initialState, history)
  options = { hydratation: { blacklist: ["hydratation", "router"] } }
  hydrate = () => {}
  defaultProps = { history, store, options, hydrate, ...initialState }
})

it("shallow renders without crashing", () => {
  shallow(<App {...defaultProps} />)
})

it("mount renders without crashing", () => {
  mount(<App {...defaultProps} />)
})

it("render renders without crashing", () => {
  render(<App {...defaultProps} />)
})

it("matches snapshot", () => {
  const wrapper = mount(<App {...defaultProps} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

it("renders children", () => {
  const wrapper = mount(<App {...defaultProps} />)
  expect(wrapper.children().exists()).toBeTruthy()
})

it("renders null when no hydratation", () => {
  defaultProps.hydratation.done = false
  const wrapper = mount(<App {...defaultProps} />)
  expect(wrapper.children().exists()).toBeFalsy()
})
