import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {

  return (
    <>
      
      <main className="text-base font-semibold px-4">
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, unde. Sit reprehenderit nisi expedita doloribus numquam, minus accusamus magnam, sequi, molestias aliquam repudiandae veritatis aspernatur! Alias, ratione dolores. Saepe consectetur eveniet unde? Illo, dolorum?</p>
      </main>
    </>
  );
};

export default Home;

