import ahmn from "../assets/ahmed.jpg";
import akkh from "../assets/women.jpg";
import ahmnk from "../assets/AMY.jpg";

export default function SectionFive() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-sans bg-slate-50/30">
    
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
          Learn From Experienced Instructors
        </h2>
        <a
          href="#all-instructors"
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-indigo-600 hover:bg-slate-50 transition-colors self-start sm:self-auto shadow-sm"
        >
          All Instructors <span className="text-[10px]">&gt;</span>
        </a>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

       
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
           
            <div className="bg-indigo-50/60 p-6 text-center flex flex-col items-center">
              <img
                src={ahmn}
                
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm mb-3"
              />
              <h3 className="text-lg font-bold text-slate-900">
                Ahmed Mohamed
              </h3>
              <p className="text-xs font-semibold text-indigo-600 mt-1">
                WordPress Developer &amp; Instructor
              </p>
            </div>

          
            <div className="p-6">
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                Ahmed is a WordPress developer and instructor with seven years of experience building dynamic websites and teaching practical web
              </p>

              
              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-[11px] font-medium">
                  WordPress
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-[11px] font-medium">
                  Elementor
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-[11px] font-medium">
                  ACF
                </span>
              </div>

            
              <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
             
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 flex items-center justify-center">
                    
                  </div>
                  <span>3 courses</span>
                </div>

            
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 flex items-center justify-center">
                 
                  </div>
                  <span>7 yrs exp.</span>
                </div>
              </div>
            </div>
          </div>

                <div className="px-6 pb-6">
            <button className="w-full py-2.5 px-4 border border-indigo-200 rounded-xl text-xs font-semibold text-indigo-600 hover:bg-indigo-50/50 transition-colors">
              View Profile
            </button>
          </div>
        </div>


        <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
        
            <div className="bg-indigo-50/60 p-6 text-center flex flex-col items-center">
              <img
                src={akkh}
               
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm mb-3"
              />
              <h3 className="text-lg font-bold text-slate-900">
                Sara Ali
              </h3>
              <p className="text-xs font-semibold text-indigo-600 mt-1">
                Senior Frontend Developer
              </p>
            </div>

            
            <div className="p-6">
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                Sara is a senior frontend developer with six years of experience in modern web technologies. She specializes in building
              </p>

           
              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-[11px] font-medium">
                  HTML
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-[11px] font-medium">
                  CSS
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-[11px] font-medium">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-[11px] font-medium">
                  React
                </span>
              </div>

           
              <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
            <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 flex items-center justify-center">
             
                  </div>
                  <span>2 courses</span>
                </div>

          
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 flex items-center justify-center">
                 
                  </div>
                  <span>6 yrs exp.</span>
                </div>
              </div>
            </div>
          </div>

     
          <div className="px-6 pb-6">
            <button className="w-full py-2.5 px-4 border border-indigo-200 rounded-xl text-xs font-semibold text-indigo-600 hover:bg-indigo-50/50 transition-colors">
              View Profile
            </button>
          </div>
        </div>

    
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
          
            <div className="bg-indigo-50/60 p-6 text-center flex flex-col items-center">
              <img
                src={ahmnk}
              
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm mb-3"
              />
              <h3 className="text-lg font-bold text-slate-900">
                Omar Hassan
              </h3>
              <p className="text-xs font-semibold text-indigo-600 mt-1">
                Business &amp; Leadership Trainer
              </p>
            </div>

         
            <div className="p-6">
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                Omar is a certified business and leadership trainer with nine years of experience working with teams and organizations across the region.
              </p>

             
              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-[11px] font-medium">
                  Leadership
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-[11px] font-medium">
                  Communication
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-[11px] font-medium">
                  Entrepreneurship
                </span>
              </div>

          
              <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
               
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 flex items-center justify-center">
                  
                  </div>
                  <span>2 courses</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 flex items-center justify-center">
                   
                  </div>
                  <span>9 yrs exp.</span>
                </div>
              </div>
            </div>
          </div>

        
          <div className="px-6 pb-6">
            <button className="w-full py-2.5 px-4 border border-indigo-200 rounded-xl text-xs font-semibold text-indigo-600 hover:bg-indigo-50/50 transition-colors">
              View Profile
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
