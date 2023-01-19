import Head from "next/head";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Team Myow</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Header */}
        <Header />
        {/* Navbar */}

        {/* Body - Result */}
      </div>
    </>
  );
}
