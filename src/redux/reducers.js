import { combineReducers } from "redux"

import hydratation from "./modules/hydratation"
import router from "./modules/router"

const reducer = combineReducers({
  hydratation,
  router,
})

export default reducer
