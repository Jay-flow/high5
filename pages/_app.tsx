import "../styles/globals.css"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { useCookies } from "react-cookie"
import publicIp from "public-ip"
import { deviceDetect, isMobile, isTablet } from "react-device-detect"
import _ from "lodash"
import { RequestType } from "../utils/const"

export interface userData {
  id?: string
  ip: string
  device: string
  os: string
  userAgent: string
  createdAt: Date
  movePath: Array<string>
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
function MyApp({ Component, pageProps }): JSX.Element {
  const path = useRouter().pathname
  const [cookie, setCookie] = useCookies(["high5"])

  const inputUserData = async (userData: userData) => {
    const response = await fetch("/api/users", {
      method: RequestType.PUT,
      body: JSON.stringify(userData)
    })
    const { userID } = await response.json()
    return userID
  }

  const getUserData = async (): Promise<userData> => {
    let device: string
    let _os: string
    let _userAgent: string
    if (isMobile) {
      device = isTablet ? "Table" : "Mobile"
      const { ua, os } = deviceDetect()
      _os = os
      _userAgent = ua
    } else {
      device = "Desktop"
      const { osName, userAgent } = deviceDetect()
      _os = osName
      _userAgent = userAgent
    }
    return {
      ip: await publicIp.v4(),
      os: _os,
      device: device,
      userAgent: _userAgent,
      createdAt: new Date(_.now() + 3600000 * 9),
      movePath: [path]
    }
  }

  const updateUserMovePath = async () => {
    const userID = cookie.high5UserID
    await fetch(`/api/users/${userID}`, {
      method: RequestType.PUT,
      body: path
    })
  }

  const setCookieForUser = async () => {
    if (cookie.high5UserID == undefined) {
      const userData = await getUserData()
      const userID = await inputUserData(userData)
      setCookie("high5UserID", userID, {
        maxAge: 3600 * 24 * 365
      })
    } else {
      updateUserMovePath()
    }
  }
  useEffect(() => {
    setCookieForUser()
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
