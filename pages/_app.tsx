import "../styles/globals.css"
import { useEffect } from "react"
import { useRouter } from "next/router"

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
function MyApp({ Component, pageProps }): JSX.Element {
  const path = useRouter().pathname
  useEffect(() => {
    console.log(path)
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
