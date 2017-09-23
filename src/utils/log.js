/* eslint no-console:0 */

const isTest = process.env.NODE_ENV === "test"
const isDev = process.env.NODE_ENV === "development"
// const prod = process.env.NODE_ENV === "production"
const shouldDev = !isTest && isDev

export const devlog = (...logs) => shouldDev && console.log(...logs)

export const devlogerror = err => shouldDev && console.log(err.message || err)
