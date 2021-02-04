import Header from "../components/Header"

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      <section>{children}</section>
      <footer style={{ textAlign: "center" }}>Gmeasying ©2021 Created by Jay-flow</footer>
    </main>
  )
}

export default MainLayout
