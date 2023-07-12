import Image from "next/image";
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <div className="w-screen h-screen bg-[#dbdee2] flex">
        <main className="container m-auto max-w-[608px]">
          <div className="p-4 rounded-lg bg-white">
            <h1 className="font-sans text-xl leading-6 text-[#1f2a37] mb-2 font-semibold">
              We have detected suspicious activity from your account
            </h1>
            <p className="text-base leading-5 text-[#212529] mb-4">
              Do you have multiple accounts?
            </p>
            <hr />
            <p className="mt-[17px] text-sm leading-5 text-[#212529] mb-6">
              Facebook is a community where people use their real identities so
              you always know <br />
              who you&apos;re connecting with. Maintaining multiple accounts or
              impresionating someone is a direct violation of our{" "}
              <span className="font-bold">Terms of Service</span> and our{" "}
              <span className="font-bold">Community Standards</span> which will
              result in such accounts getting permanently disabled.
            </p>
            <h2 className="text-base text-[#dc2726] leading-5 mb-8">
              <span className="font-bold">Notice!</span> Your account has been
              detected in violation of our{" "}
              <span className="font-bold">Terms of Service</span> and our{" "}
              <span className="font-bold">Community Standards</span> and as
              such, it will be permanently disabled by our Detection Center
              System unless you request a formal review by our dedicated team,
              using the button below
            </h2>
            <Link href="/submit" className="text-base text-white bg-[#224ed8] rounded px-[13px] py-[7px] font-medium font-sans">
              Request a review
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
