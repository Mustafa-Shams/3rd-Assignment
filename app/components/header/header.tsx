



import Link from "next/link";

export default function Header(){
    return(
        
       
       <header >
       
         <ul className="bg-black pt-9  pb-7 pl-3 flex gap-20 underline  text-2xl  text-white  "> 
            <h1 className="text-3xl font-serif">
              VISIOLAB
            </h1>
            
             <li className="pl-80 ml-96 font-serif">
                 <Link href="/about" >About</Link> </li>
 
               <li className="font-serif">  <Link href="./about/contact" >Contact</Link> </li>
 
                <li className="fonr-serif" > <Link href="./about/contact/services">Services</Link>
                 </li> 
                 
                 </ul>   </header>         
             
                 
            
        
         
    )
 }