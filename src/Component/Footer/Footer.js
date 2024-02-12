import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div>
        <Link href="https://github.com/RoccIrch"><Image src="/images/github-mark-white.png" width={48} height={48} alt="githublogo"/></Link>
        
        <Link href="https://www.malt.fr/profile/antoinelaroche"><Image src="/images/malt.svg" width={48} height={48} alt="githublogo"/></Link>
      </div>
      <p>This website is not an operational roasting company store but rather a showcase for my portfolio, highlighting my web development skills and creativity. For any DMCA complain please contact me on my github !</p>
    </div>
  )
}
