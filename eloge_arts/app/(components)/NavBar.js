// import { img } from '../eloge-arts.ico';
import { FaHome,FaOpencart,FaBehance } from "react-icons/fa";
import { FaTableCells,FaXTwitter,FaInstagram } from "react-icons/fa6";
import { MdPerson } from "react-icons/md";
import { IoIosMail } from "react-icons/io";




export const NavBar = () => {
  return (
    <div className="flex float-left left-0 top-0 w-[45vh] bg-[#222629] h-screen fixed">

        <div className="">
            <span>
                {/* <img src="./app/eloge-arts.ico" alt="icon" className='flex float-left w-8 text-white'/> */}
                <p className="bg-icon"></p>
            </span>


            <span className='inline justify-between text-white font-bold float-right px-[8pc] w-9'>
                <span>
                </span>
                <p>
                    Eloge Arts
                </p>
            </span>
            
        </div>


        <div className="flex flex-col justify-start top-[120px] pl-10  absolute space-y-8 text-xl">
            <span className="text-[#41484c] flex flex-row justify-around gap-20  cursor-pointer"><FaHome /> Home</span>
            <span className="text-[#41484c] flex flex-row justify-around gap-20 cursor-pointer"><FaTableCells /> Gallery</span>
            <span className="text-[#41484c] flex flex-row justify-around gap-20 cursor-pointer"><MdPerson /> About Me</span>
            <span className="text-[#41484c] flex flex-row justify-around gap-20 cursor-pointer"><IoIosMail /> Contact</span>
            <span className=" flex flex-row justify-between gap-20 text-[#41484c] cursor-pointer"><FaOpencart /> Add to Cart</span>
        </div>


        <div className="flex flex-row  justify-center items-center space-x-4 ml-[4pc]  text-[#41484C] absolute bottom-7 text-3xl">

        <FaXTwitter />
        <FaInstagram />
        <FaBehance />
        <IoIosMail />
        </div>
        
    </div>
  )
}
