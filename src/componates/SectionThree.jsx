import image from "../assets/image1.jpg";
import Image from "../assets/Image.jpg";
import mage from "../assets/mage.jpg"

export default function SectionThree(){ 
   return (

           
  <section className="mx-auto w-full max-w-7xl px-4 py-16">
     
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="mb-2 text-sm font-bold text-black">
            Featured Courses
            </h1>
          

          <h2 className="text-3xl font-bold text-gray-900">
            Explore Our Popular Courses
          </h2>

          <p className="mt-3 text-gray-500">
            Improve your skills with our best courses.
          </p>
        </div>

        <button className="rounded-lg border border-violet-600 px-5 py-3 font-semibold text-violet-600 transition hover:bg-violet-600 hover:text-white">
          View All Courses
        </button>
      </div>

     
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
       
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <img
            src={image}
            
            className="h-48 w-full object-cover"
          />

          <div className="p-5">
            <div className="mb-4 flex items-center justify-between gap-2">
              <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700">
                Development
              </span>

              <span className="text-sm text-gray-500">★ 4.8</span>
            </div>

            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Complete Web Development
            </h3>

            <p className="mb-5 text-sm leading-6 text-gray-500">
              Learn HTML, CSS, JavaScript and build modern websites.
            </p>

            <div className="mb-5 flex gap-5 text-sm text-gray-500">
              <p>◷ 20 Hours</p>
              <p>▤ 12 Lessons</p>
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
              <div>
                <p className="text-xs text-gray-500">Instructor</p>
                <p className="font-semibold text-gray-800">Ahmed Mohamed</p>
              </div>

              <div className="text-right">
                <p className="mb-2 text-lg font-bold text-violet-600">
                  $49.99
                </p>

                <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <img
            src={Image}
            
            className="h-48 w-full object-cover"
          />

          <div className="p-5">
            <div className="mb-4 flex items-center justify-between gap-2">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Design
              </span>

              <span className="text-sm text-gray-500">★ 4.9</span>
            </div>

            <h3 className="mb-3 text-xl font-bold text-gray-900">
              UI/UX Design Fundamentals
            </h3>

            <p className="mb-5 text-sm leading-6 text-gray-500">
              Learn how to design attractive and user-friendly interfaces.
            </p>

            <div className="mb-5 flex gap-5 text-sm text-gray-500">
              <p>◷ 15 Hours</p>
              <p>▤ 10 Lessons</p>
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
              <div>
                <p className="text-xs text-gray-500">Instructor</p>
                <p className="font-semibold text-gray-800">Sara Ali</p>
              </div>

              <div className="text-right">
                <p className="mb-2 text-lg font-bold text-violet-600">
                  $39.99
                </p>

                <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>

     
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <img
            src={mage}
            className="h-48 w-full object-cover"
          />

          <div className="p-5">
            <div className="mb-4 flex items-center justify-between gap-2">
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                Programming
              </span>

              <span className="text-sm text-gray-500">★ 4.7</span>
            </div>

            <h3 className="mb-3 text-xl font-bold text-gray-900">
              React for Beginners
            </h3>

            <p className="mb-5 text-sm leading-6 text-gray-500">
              Build interactive websites using React and modern tools.
            </p>

            <div className="mb-5 flex gap-5 text-sm text-gray-500">
              <p>◷ 18 Hours</p>
              <p>▤ 14 Lessons</p>
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
              <div>
                <p className="text-xs text-gray-500">Instructor</p>
                <p className="font-semibold text-gray-800">Omar Hassan</p>
              </div>

              <div className="text-right">
                <p className="mb-2 text-lg font-bold text-violet-600">
                  $44.99
                </p>

                <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
   
  );
}
