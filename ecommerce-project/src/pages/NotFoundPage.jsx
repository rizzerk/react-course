
import { Header } from "../components/Header"
import './NotFoundPage.css'
export function NotFoundPage(){

  return(
    <>
      <title>404 Page Not Found</title>

      <Header />

      <div className="container">
        <div className="content">
        <p className="big">404</p>
        <p className="text">Page not Found</p>
        </div>
      </div>

    </>
  )
}