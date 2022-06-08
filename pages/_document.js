import {
  Html, Head, Main, NextScript,
} from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
