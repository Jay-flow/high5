import { useEffect, useState } from "react"
import useSwr from "swr"
import { userData } from "./_app"

const Usersfetcher = (url) => fetch(url).then((res) => res.json())

const Admin: React.FC = () => {
  const { data, error } = useSwr("/api/user", Usersfetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  const users = data.map((user: userData) => <h1 key={user.id}>{user.ip}</h1>)
  // TODO:: 어드민 로그인 기능 구현 & 유저 로그 표시
  return <div>{users}</div>
}

export default Admin
