import useSwr from "swr"
import Link from "next/link"
import { userData } from "../_app"

const Usersfetcher = (url) => fetch(url).then((res) => res.json())

const Admin: React.FC = () => {
  const { data, error } = useSwr("/api/users", Usersfetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  const users = data.map((user: userData) => (
    <tr key={user._id}>
      <td>{user.ip}</td>
      <td>{user.os}</td>
      <td>{user.device}</td>
      <td>{user.userAgent}</td>
      <td>
        <Link href="/admin/user-path">
          <span style={{ color: "blue" }}>경로보기</span>
        </Link>
      </td>
      <td>{user.createdAt}</td>
      <td>{user.updatedAt}</td>
    </tr>
  ))
  // TODO:: 어드민 로그인 기능 구현 & 유저 로그 표시
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>IP</th>
          <th>OS</th>
          <th>Device</th>
          <th>UserAgent</th>
          <th>MovePath</th>
          <th>CreatedAt</th>
          <th>UpdatedAt</th>
        </tr>
      </thead>
      <tbody>{users}</tbody>
    </table>
  )
}

export default Admin
