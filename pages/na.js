import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function NA() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tree of life</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Niestety nie możemy jeszcze zaoferować usługi w Twoim kraju :(
        </h1>

        <p className={styles.description}>
        Pracujemy nad tym, by już niedługo Tree of Life było dostępne z każdego miejsca na Ziemi.
        </p>

        <p style="font-size: 8px;">
        ::CLOUDFLARE_ERROR_1000S_BOX::
        </p>
      </main>
    </div>
  )
}