import { GetServerSideProps } from "next";
import axios from 'axios'
import { logout } from "../../helpers/auth";

const Logout = ({page}: any)  => {

  const handleLogout = async (e: any) => {
    e.preventDefault()
    logout()
  }

  return (
    <>
      <p>{page.message}</p>
      <button onClick={handleLogout}>logout</button>
    </>
  )
}

export default Logout;

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const query = `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/users/log_out`
  const res = await axios.get(query, {
    headers: {
      cookie: ctx.req.headers.cookie
    },
    withCredentials: true,
  })

  const page = await res.data

  return {
    props: { page }
  }
}