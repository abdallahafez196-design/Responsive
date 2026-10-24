import { FaCode } from "react-icons/fa";
import { FaBattleNet } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaPager } from "react-icons/fa6";
import { IoIosFlash } from "react-icons/io";
export default function Sectiontwo() {
  return (
   <section className="w-full bg-[#F8FAFC] py-8 flex flex-col items-center justify-center gap-4">
     
      <p className="text-[9px] font-semibold text-[#94A3B8] tracking-wider">
        BROWSE BY CATEGORY
      </p>

    
      <div className="flex flex-wrap justify-center items-center gap-2">

        <button className="flex items-center gap-2 rounded-full bg-[#F5EEFF] px-3 py-2 text-[10px] text-[#9333EA]">
          <FaCode />
          <span>Frontend</span>
          <span className="text-[#C4B5FD]">2</span>
        </button>

       <FaBattleNet />
        <button className="flex items-center gap-2 rounded-full bg-[#EAF7FF] px-3 py-2 text-[10px] text-[#0284C7]">
      
          <span>WordPress</span>
          <span className="text-[#7DD3FC]">2</span>
        </button>

    
        <button className="flex items-center gap-2 rounded-full bg-[#FFF4E8] px-3 py-2 text-[10px] text-[#F97316]">
           <BsFillPeopleFill />
          <span>Leadership</span>
          <span className="text-[#FDBA74]">1</span>
        </button>

      
        <button className="flex items-center gap-2 rounded-full bg-[#E9FFF5] px-3 py-2 text-[10px] text-[#10B981]">
        <FaPager />
          <span>Entrepreneurship</span>
          <span className="text-[#6EE7B7]">1</span>
        </button>
       

        

       <IoIosFlash />
        <button className="flex items-center gap-2 rounded-full bg-[#E9FFF5] px-3 py-2 text-[10px] text-violet">
         
          <span>Backend</span>
          <span className="text-[#A5B4FC]">0</span>
        </button>
      

      </div>
      </section>
  );
}
