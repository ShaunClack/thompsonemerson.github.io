import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <meta name="theme-color" content="#090f29"></meta>

        <title>Emerson Thompson | Full-Stack Developer</title>
        <meta name="description" content="Developer Web & Mobile, A speaker fond of technology"/>
      </Head>

      <style jsx global>{`
        :root {
          --color-dark: #090f29;
          --color-neon: #58fda1;
          --color-grey: #d6d6d6;

          --font-silka: 'Silka', sans-serif;
        }

        @font-face {
          font-family: Silka;
          font-weight: 500;
          src: url('/fonts/silka-medium-webfont.ttf');
        }

        @font-face {
          font-family: Silka;
          font-weight: 700;
          src: url('/fonts/silka-semibold-webfont.ttf');
        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        html,
        body,
        #__next {
          height: 100%;
        }

        html {
          font-size: 60.5%;
        }

        body {
          font-family: var(--font-silka);
          font-weight: 500;
        }
      `}</style>

      <Component {...pageProps} />
    </>
  )
}