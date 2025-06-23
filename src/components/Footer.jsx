import footer1 from "../assets/footer-mobile.png";
import footer2 from "../assets/footer-desktop.png";
export const FooterCom = async()=>{
    return (
 <footer className=" text-white">
        <img src={footer1} className='block md:hidden w-full'/>
        <img src={footer2} className='hidden md:block w-full'/>
      </footer>
    )
}