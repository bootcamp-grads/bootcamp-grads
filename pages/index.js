import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bootcamp Grads</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Coming Soon!" />
        <p className="description">
          Just finished your coding/UX bootcamp in Singapore?
          Visit this <a href="https://github.com/bootcamp-grads/bootcamp-grads">repo</a> to learn more.
        </p>
      </main>

      <Footer />
    </div>
  )
}
