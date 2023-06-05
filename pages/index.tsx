import Head from "next/head";
import styles from "./home.module.scss";
import { SubscribeButton } from "./components/SubscribeButton";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ignews</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏Hey, Welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get acess to all the publications <br />
            <span>for $9.90/month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/Mulher.svg" alt="Girl coding" />
      </main>
    </>
  );
}
