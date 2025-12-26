import { Facebook, Instagram, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Footer(){
    return(
        <>
        <section>
          <div className="flex justify-between p-4">
            <div className="">
                <h1 className='font-bold text-md md:text-3xl '><span className="text-green-500">M</span>egethos</h1>                
            </div>

            <div>
                <ul className="flex gap-x-3 font-bold text-sm ">
                    <li> <Link href={'#Features'}> Features </Link> </li>
                    <li> <Link href={'#Pricing'}> Pricing </Link> </li>
                    <li> <Link href={'#FAQ'}> FAQ  </Link></li>
                    {/* <li> <Link href={'#Contact'}> Contact us  </Link> </li> */}
                </ul>
            </div>


          </div>

          <div className="mt-10 p-5 ">
            <p className="text-center border-t-2 border-gray-400 p-10">@2025 Digital tool, Inc. All rights reserved.</p>
          </div>  
        </section>
        </>
    )
}