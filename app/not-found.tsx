import Link from "next/link";
export default function NotFound(){return <main className="page flex min-h-screen items-center"><div><p className="eyebrow">404</p><h1 className="mt-4 text-5xl font-semibold tracking-[-.07em]">That project isn’t here.</h1><Link href="/" className="link-arrow mt-8">Back home <span>←</span></Link></div></main>}
