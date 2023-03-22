import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./index.module.scss";

function Nav() {
  const router = useRouter();

  // 获取当前页面的pathname
  const { pathname } = router;

  return (
    <div className={styles['M-nav']}>
      <Link href="/">
        <div
          className={
            styles['tab'] + (pathname === "/" ? " " + styles['current'] : "")
          }
        >
          Home
        </div>
      </Link>
      <Link href="/demo">
        <div
          className={
            styles['tab'] + (pathname === "/demo" ? " " + styles['current'] : "")
          }
        >
          Demo
        </div>
      </Link>
    </div>
  )
};

export default Nav;