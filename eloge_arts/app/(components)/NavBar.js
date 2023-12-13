// import { img } from '../eloge-arts.ico';
import { FaHome,FaOpencart } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
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


        <div className="flex flex-col">
            <span className="text-white "><FaHome /> Home</span>
            <span className="text-white"><FaTableCells /> Gallery</span>
            <span className="text-white"><MdPerson /> About Me</span>
            <span className="text-white"><IoIosMail /> Contact</span>
            <span className="text-white"><FaOpencart /> Add to Cart</span>
        </div>


        <div className=""></div>
        
    </div>
  )
}
