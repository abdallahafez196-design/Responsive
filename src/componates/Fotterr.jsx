import React from 'react'

export default function Fotterr() {
  return (
  
    <footer className="w-full font-sans">
     
      <div className="bg-indigo-600 py-16 px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Ready to Start Learning?
          </h2>
          <p className="text-indigo-100 text-sm md:text-base mb-8 max-w-xl mx-auto">
            Explore our available courses and choose the learning path that fits your goals.
          </p>
          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-600 hover:bg-indigo-50 font-semibold rounded-xl text-sm transition-colors shadow-sm">
            Browse All Courses <span>→</span>
          </button>
        </div>
      </div>

      
      <div className="bg-slate-950 text-slate-400 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
       
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
              
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg">SkillUp Academy</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-6 max-w-sm">
              Practical technology and business courses built around real-world projects, delivered by experienced instructors.
            </p>
            
           
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer">
               
                <span className="text-xs">🐦</span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer">
                
                <span className="text-xs">📘</span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer">
              
                <span className="text-xs">📸</span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-800 transition-colors cursor-pointer">
             
                <span className="text-xs">▶️</span>
              </div>
            </div>
          </div>

       
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Courses</a></li>
              <li><a href="#instructors" className="hover:text-white transition-colors">Instructors</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

      
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Categories</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#frontend" className="hover:text-white transition-colors">Frontend</a></li>
              <li><a href="#wordpress" className="hover:text-white transition-colors">WordPress</a></li>
              <li><a href="#backend" className="hover:text-white transition-colors">Backend</a></li>
              <li><a href="#leadership" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#entrepreneurship" className="hover:text-white transition-colors">Entrepreneurship</a></li>
            </ul>
          </div>

         
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Contact</h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <span className="text-slate-300">info@skillupacademy.com</span>
              </div>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Available Sun - Thu, 9am - 5pm
              </p>
            </div>
          </div>

        </div>

      
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 SkillUp Academy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
