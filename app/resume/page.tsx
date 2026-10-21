import Link from "next/link";
import { Header } from "@/components/Header";
export const metadata = { title: "Resume" };
export default function ResumePage() { return <><Header/><main className="page flex min-h-[70vh] items-center py-24"><div><p className="eyebrow">Resume</p><h1 className="mt-5 text-[clamp(2.8rem,6vw,5.5rem)] font-semibold leading-[.9] tracking-[-.08em]">Resume<span className="text-[#bd542c]">.</span></h1><p className="text mt-8 max-w-xl">This is the pdf document of my resume<code className="mono text-sm">public/resume.pdf</code>,</p>
<a
  href="/resume.pdf"
  download
  className="link-arrow mt-8"
>
  Download resume <span>↓</span>
</a>
<Link className="link-arrow mt-8" href="/">Back home <span>←</span></Link></div></main></>; 

}
