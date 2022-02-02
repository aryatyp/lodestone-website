import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <iframe
          src="http://map.lodestone.quest:8123/"
          width="100%"
          height="1200"
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </main>

      <Footer />
    </div>
  );
}
