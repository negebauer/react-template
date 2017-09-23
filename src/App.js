import React, { Component } from "react"
import PropTypes from "prop-types"
import { Provider, connect } from "react-redux"
import { ConnectedRouter } from "react-router-redux"

import { devlog } from "./utils/log"
import Nav from "./Nav"
import { hydrate } from "./redux/modules/hydratation"

const mapStateToProps = state => ({
  hydratation: state.hydratation,
})

const mapDispatchToProps = {
  hydrate,
}

class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    hydratation: PropTypes.object.isRequired,
    hydrate: PropTypes.func.isRequired,
    options: PropTypes.object,
  }

  componentWillMount() {
    const { store, hydrate, options } = this.props
    hydrate(store, options.hydratation)
  }

  render() {
    devlog("App", this.state, this.props)
    if (!this.props.hydratation.done) {
      return null
    }
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <Nav />
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
