import Image from "next/image";
import styles from "@/app/(beforeLogin)/_component/main.module.css";
import Link from "next/link";
import catLogo from "../../../../public/catLogo.svg";

export default function Main() {
  return (
    <>
      <div className={styles.left}>
        <Image src={catLogo} alt="logo" style={{ width: "200px" }} />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터 계정에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </>
  );
}
