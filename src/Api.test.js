import Api from "./Api"

const url = "http://ip.jsontest.com"
const api = new Api(url)

it("sets urls", () => {
  expect(api.baseUrl).toBe(url)
  expect(api.url("/users")).toBe(`${url}/users`)
})

it("gets", async () => {
  const ip = await api.GET("/")
  expect(ip).toHaveProperty("ip")
})

it("posts", async () => {
  const ip = await api.POST("/", {})
  expect(ip).toHaveProperty("ip")
})

it("fails parsing json", async () => {
  const err = await api.request(new Promise(res => res("asd/adw")))
  expect(err).toBeInstanceOf(Error)
})

it("fails on bad url", async () => {
  const api = new Api("")
  const err = await api.GET("/")
  expect(err).toBeInstanceOf(Error)
})
