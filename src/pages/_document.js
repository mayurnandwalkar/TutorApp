import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />

      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:900|Roboto:400,400i,500,700" rel="stylesheet" />

      <link rel="stylesheet" href="assets/css/main.css" data-n-g="" />
      <link rel="stylesheet" href="assets/css/tutorapp.css" data-n-g="" />
      <link rel="stylesheet" href="assets/css/custom.css" data-n-g="" />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
