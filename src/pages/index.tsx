import Head from 'next/head';
import localFont from '@next/font/local';

import styles from '@/styles/Home.module.css';

const redaction100 = localFont({
  src: '../styles/fonts/Redaction_100-Italic.woff2',
});
const redaction70 = localFont({
  src: '../styles/fonts/Redaction_70-Italic.woff2',
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>({'>'}‿◠)✌ ariel gerstein / developer</title>
        <meta
          name="description"
          content="Javascript developer specialized in React and Typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={`${styles.title} ${redaction100.className}`}>
          Ariel Gerstein
        </h1>
        <h2 className={`${styles.subtitle} ${redaction70.className}`}>human</h2>
        <h2 className={`${styles.subtitle} ${redaction70.className}`}>
          developer
        </h2>
        <h2 className={`${styles.subtitle} ${redaction70.className}`}>
          trying to build something cool
        </h2>
      </div>
    </div>
  );
}
