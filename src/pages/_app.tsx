import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";
import { SideBar } from "~/components/SideBar";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Post App</title>
        <meta name="description" content="next js full stack web" />
      </Head>
      <div className="container mx-auto flex">
        <SideBar />
      <div className="border-l-[0.150rem] border-r-[0.150rem] flex-grow min-h-screen">
      <Component {...pageProps} />
      </div>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
