import Head from 'next/head';
import localFont from '@next/font/local';
import Image from 'next/image';

import styles from '@/styles/Home.module.css';

import githubIcon from '../images/social-icons/github-icon.png';
import linkedinIcon from '../images/social-icons/linkedin-icon.png';
import twitterIcon from '../images/social-icons/twitter-icon.png';
import emailIcon from '../images/social-icons/email-icon.png';

const redaction100 = localFont({
  src: '../styles/fonts/Redaction_100-Italic.woff2',
});
const redaction70 = localFont({
  src: '../styles/fonts/Redaction_70-Italic.woff2',
});

const iconProps = {
  width: 50,
  height: 50,
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>({'>'}‿◠)✌ ariel gerstein / developer</title>
        <meta
          name="description"
          content="Javascript developer specialized in React and Typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['title-container']}>
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
      <div className={styles['social-icons']}>
        {/* Credits to https://www.deviantart.com/greenpixels-official for the pixel art icons */}
        <a href="https://github.com/arielger" target="_blank" rel="noreferrer">
          <Image src={githubIcon} alt="Github icon" {...iconProps} />
        </a>
        <a
          href="https://www.linkedin.com/in/arielgerstein/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={linkedinIcon} alt="Linkedin icon" {...iconProps} />
        </a>
        <a href="https://twitter.com/arielger" target="_blank" rel="noreferrer">
          <Image src={twitterIcon} alt="Twitter icon" {...iconProps} />
        </a>
        <a href="mailto:ariel.gers@gmail.com" target="_blank" rel="noreferrer">
          <Image src={emailIcon} alt="Email icon" {...iconProps} />
        </a>
      </div>
    </div>
  );
}
