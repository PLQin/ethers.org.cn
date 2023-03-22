import axios from 'axios'
import Link from 'next/link'
import styles from './profile.module.scss'

function Profile(props) {
  const { datum } = props

  return (
    <div className={styles['P-profile']}>
      <Link href="/">
        <div className={styles['top-bar']}>&lt;返回</div>
      </Link>
      <h1>ThisisProfilePage.</h1>
      <p>ID:{datum.id}</p>
      <p>Name:{datum.name}</p>
      <p>Age:{datum.age}</p>
      <p>Favorite:{datum.favorite}</p>
    </div>
  )
}

// 说明：
// getserversideProps：适用于SSR，不支持SSG，服务端会重新发起请求更新数据，
// getstaticProps：SSR和SSG均支持，但仅在build的时候发起API请求，build后的网站不再请求api, 数据不会更新
// 这里以getstaticProps为例。
export const getStaticProps = async (paths) => {
  console.log(paths);
  console.log(11111111111111);
  const { params } = paths

  const res = await axios({
    method: 'get',
    url: 'http://localhost:3000/api/test',
    params: { id: params.id }
  })

  return {
    // 这里的props将会传递给组件使用
    props: {
      datum: res.data.data,
    },
  }
}

// 使用 getStaticPaths 将会build多个页面
export const getStaticPaths = async () => {
  return {
    // 这里的数据提供给 getStaticProps 使用
    paths: [
      { params: { id: '1', } },
      { params: { id: '2', } },
      { params: { id: '3', } },
    ],
    // fallback为false，表示如果不在以上参数的路由将返回404
    fallback: false,
  }
}

export default Profile