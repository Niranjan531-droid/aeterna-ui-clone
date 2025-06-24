import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Footer(){
 return(<main>
    <section className="flex flex-row justify-between text-white bg-black font-serif py-[140px]">
        <div className="flex pl-[30px] pt-[20px]">
    <h3 className="hover:cursor-pointer text-decoration-line: underline;">CONTACT</h3>
        </div>
        <div>
         <h2 className="text-[80px] hover:cursor-pointer">Subscribe</h2>
         <h3 className="mt-[0px]">to get the latest updates</h3>
         <input name="email" type="email" placeholder="someone@gmail.com" className="bg-white text-black rounded-md pl-[10px]" /> 
         <button className="ml-5 rounded-md bg-brown hover:cursor-pointer">Subscribe</button>
        </div>
        <div>
         <h3 onClick={() => window.scrollTo({ top: 20, behavior: 'smooth' })}>Navigate</h3>
         <h3>Home</h3>
         <h3>About</h3>
         <h3>Subscribe</h3>
         </div>
          <div className='pr-[30px]' >
          <h3><DotLottieReact className='h-[30px] w-[70px]' src="public/Animation - 1750786966666.json" loop autoplay /></h3>
          <h3><DotLottieReact className='h-[30px] w-[70px]' src='public/Animation - 1750787262562.json' loop autoplay /></h3>
          <h3><DotLottieReact className='h-[30px] w-[70px]' src='public/Animation - 1750787408036.json' loop autoplay/></h3>
          <h3><DotLottieReact className='h-[30px] w-[70px]' src='public/Animation - 1750787506921.json' loop autoplay /></h3>            
         </div>
      
    </section>

    <section className="flex flex-row justify-around font-sans bg-black text-white py-[30px]">
        <div> &copy; 2025 Aeterna. All Rights Reserved </div>
        <div>Terms and Conditions</div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to Top
            </button>
        
    </section>
 </main>)
}
export default Footer;