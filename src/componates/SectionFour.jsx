import { MdLibraryBooks } from "react-icons/md";
import { GiRainbowStar } from "react-icons/gi";
import { PiShareFatFill } from "react-icons/pi";
import { FaFaceSadCry } from "react-icons/fa6";

export default function SectionFour() {
  return (
   

<section className="max-w-7xl mx-auto px-4 py-16 font-sans bg-[#F1F5F9]">
  
  <div className="text-center max-w-xl mx-auto mb-12">
    <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">
      Why Learn With Us
    </h2>

    <p className="text-slate-500 text-sm md:text-base">
      Everything we build is designed around one goal — helping you get results you can use.
    </p>
  </div>

  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-5">
    <MdLibraryBooks />
       
      </div>

      <h3 className="text-base font-bold text-slate-900 mb-2">
        Practical Projects
      </h3>

      <p className="text-slate-500 text-xs leading-relaxed">
        Every course includes real-world projects you can add directly to your portfolio.
      </p>
    </div>

  
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-5">
        <GiRainbowStar />
       
      </div>

      <h3 className="text-base font-bold text-slate-900 mb-2">
        Expert Instructors
      </h3>

      <p className="text-slate-500 text-xs leading-relaxed">
        Learn from professionals with years of industry and teaching experience.
      </p>
    </div>

   
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-5">
        <PiShareFatFill />
    
      </div>

      <h3 className="text-base font-bold text-slate-900 mb-2">
        Career-Focused Content
      </h3>

      <p className="text-slate-500 text-xs leading-relaxed">
        Curriculum designed around the skills that employers and clients actually need.
      </p>
    </div>

    
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-5">
    <FaFaceSadCry />
      
      </div>

      <h3 className="text-base font-bold text-slate-900 mb-2">
        Flexible Learning
      </h3>

      <p className="text-slate-500 text-xs leading-relaxed">
        Study at your own pace with structured sessions and clear learning objectives.
      </p>
    </div>

  </div>
</section>

  );
}
