import { GetServerSideProps } from "next";
import axios from 'axios'

const Logout = ({page}: any)  => {

  const handleLogout = async (e: any) => {
    e.preventDefault()
    await axios({
      method: 'get',
      url: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api/users/log_out`,
      withCredentials: true,
    })
    .then(res => {
      console.log(res)
      localStorage.removeItem('user')
    })
    .catch(err => {
      console.log(err)
    })
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

  console.log(ctx.res)

  const page = await res.data

  return {
    props: { page }
  }
}