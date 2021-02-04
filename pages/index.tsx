import { useEffect } from "react"
import publicIp from "public-ip"
import { deviceDetect, isMobile, isTablet } from "react-device-detect"
import { RequestType } from "../utils/const"

export interface userData {
  ip: string
  device: string
  os: string
  userAgent: string
}

// const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home(): JSX.Element {
  // const { data, error } = useSwr("/api/user", fetcher)

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
      userAgent: _userAgent
    }
  }

  const inputUserData = (userData: userData) => {
    fetch("/api/user", {
      method: RequestType.PUT,
      body: JSON.stringify(userData)
    })
  }

  useEffect(() => {
    getUserData().then((userData: userData) => {
      inputUserData(userData)
    })
  }, [])

  return (
    <div>
      <h1 className="text-purple-600">Hello</h1>
    </div>
  )
}
