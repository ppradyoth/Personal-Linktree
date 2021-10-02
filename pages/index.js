import Head from "next/head";
import Image from "next/image";
import Links from "../components/Links";
<meta name="viewport"content="width=device-width, initial-scale=1.0" /> 
export default function Home() {
  return (
    <div
      style={{
        background:
          "url(https://wallpaperaccess.com/full/982832.jpg)",
      }}
      className="flex flex-col !bg-cover items-center justify-center min-h-screen py-2"
    >
      <Head>
        <title>Pradyoth P</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="flex flex-col items-center justify-center mt-5">
        { <Image
          width={200}
          height={200}
          className="mx-auto rounded-full"
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1607452414045/-Mx05MRL2.jpeg?w=400&h=400&fit=crop&crop=faces&auto=compress"
          alt="Pradyoth P"
        /> }
        <h2 className="my-3 text-3xl font-bold text-center text-white md:text-4xl">
           Pradyoth P
        </h2>
      </div>

      <Links
        image="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
        link="https://www.instagram.com/ppradyoth"
        text="Follow me on Instagram"
      />
      <Links
        image="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png"
        link="https://www.linkedin.com/in/ppradyoth"
        text="Connect with me on LinkedIn"
      />
      <Links
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
        link="https://github.com/ppradyoth"
        text="Checkout my code on Github"
      />
      <Links
        image="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
        link="https://twitter.com/ppradyoth"
        text="Follow me on Twitter"
      />
      
      <Links
        image="https://www.facebook.com/images/media_effect/ar_hub_logos/spark-ar-hub-logo-wordmark.svg"
        link="https://www.facebook.com/sparkarhub/portfolios/ig/ppradyoth/"
        text="Checkout my Instagram Filters"
      />
    </div>
  );
}