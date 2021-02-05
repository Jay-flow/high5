import _ from "lodash"

const getCurrentDate = (): Date => {
  return new Date(_.now() + 3600000 * 9)
}

export { getCurrentDate }
