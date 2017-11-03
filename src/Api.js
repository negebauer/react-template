import { devlog } from "./utils/log"
const popsicle = require("popsicle")

export default class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  request = async request => {
    try {
      const response = await request
      return JSON.parse(response.body)
    } catch (err) {
      devlog("ERROR API", err)
      return err
    }
  }

  url = url => `${this.baseUrl}${url}`

  GET = async url => this.request(popsicle.get(this.url(url)))

  POST = async (url, body) => this.request(popsicle.post(this.url(url), body))
}
