import React from 'react'
import { NavLink } from 'react-router-dom'
import homeicon from '../../assets/Homeicon.svg'
import tntlogo from '../../assets/tntLogo.png'
import profileicon from '../../assets/Profile.svg'
import map from '../../assets/pngegg.png'
import notificationicon from '../../assets/notification.svg'
import coursesicon from '../../assets/Courses.svg'
import favrticon from '../../assets/favourites.svg'
import savedicon from '../../assets/saved .svg'
import carticon from '../../assets/cart.svg'
import blogicon from '../../assets/Blog.svg'
import inboxicon from '../../assets/Inbox.svg'
import communityicon from '../../assets/Community.svg'
import cheffiicon from '../../assets/ChatBot.svg'
import tiffinicon from '../../assets/Tiffin.svg'


const Navbar = () => {
  return (
    <div
      className="bg-[#002140] min-h-screen font-serif text-[#e2e4d6] m-0 p-0 box-border"
    >
      <header
        className="animate-fadeIn w-full flex items-center justify-between p-3 bg-[#e2e4d6] shadow-lg fixed top-0 left-0 right-0 z-10 h-[100px]"
      >
        <div className="flex items-center space-x-4">
          <div
            className="text-2xl font-bold hidden md:flex items-center gap-3 text-[#002140]"
          >
            <img src={tntlogo} alt="" width='70px' className='rounded-full' />
            <span className="drop-shadow-xl">Taste'n Talk</span>
          </div>
        </div>

        {/* <!-- Map Button --> */}
        <div className="relative group">
          <button
            className="bg-[#002140] p-2 rounded-full w-[65px] shadow-md cursor-pointer hover:scale-110 transition-transform duration-[0.8s] hover:shadow-lg"
            title="Map"
            >
            <img src={map} alt="" width='50px' className='border-none' />
          </button>
          <span
            className="invisible group-hover:visible absolute w-auto bg-[#002140]/90 text-white text-center rounded-md py-1 px-2.5 z-50 bottom-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-[0.8s] whitespace-nowrap text-sm"
          >Find Nearby Locations</span
          >
        </div>

        {/* <!-- Search Bar --> */}
        <div className="relative w-[30%] max-w-[400px]">
          <input
            type="text"
            placeholder="Search recipes, chefs, or topics..."
            className="w-full py-[10px] pr-[40px] pl-[20px] rounded-[25px] bg-[#002140] text-[#f8f9fa] italic placeholder-[#f8f9fa] placeholder-italic shadow-[0_4px_6px_rgba(0,33,64,0.89)] border-none transition-all duration-[0.8s] ease-in-out focus:shadow-[0_5px_25px_rgba(0,0,0,0.2)] focus:-translate-y-0.5 focus:outline-none"
          />
          <button
            className="absolute right-[15px] top-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent border-none text-[#f8f9fa] cursor-pointer"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* <!-- Create Button with Dropdown --> */}
        <div className="relative inline-block group">
          <button
            className="flex items-center justify-center bg-gradient-to-r from-[#002140] to-[#004a8f] text-[#f8f9fa] rounded-[25px] px-3 py-2 shadow-[0_4px_6px_rgba(0,33,64,0.89)] border-none cursor-pointer transition-all duration-[0.8s] hover:shadow-[0_6px_8px_rgba(0,0,0,0.3)] hover:-translate-y-1"
          >
            <span className="text-[16px] font-semibold mr-1">Create </span>  <span className='text-purple-300 text-2xl'>+</span> 
          </button>
          <div
            className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute right-0 mt-2 w-40 bg-white/90 backdrop-blur-md min-w-[160px] shadow-lg z-50 rounded-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-500"
          >
            <div
              className="p-2 rounded-t-lg bg-[#002140] text-[#e2e4d6] font-semibold text-center border-b border-gray-200"
            >
              Create New
            </div>
            <a
              href="#"
              className="block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#002140]/10 hover:translate-x-1.5"
            >Post Story</a
            >
            <a
              href="#"
              className="block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#002140]/10 hover:translate-x-1.5"
            >Post Videos</a
            >
            <a
              href="#"
              className="block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#002140]/10 hover:translate-x-1.5"
            >Post Short Videos</a
            >
            <a
              href="#"
              className="block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#002140]/10 hover:translate-x-1.5"
            >Blogs/Article</a
            >
            <a
              href="#"
              className="block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#002140]/10 hover:translate-x-1.5"
            >Go Live</a
            >
          </div>
        </div>

        {/* <!-- Action Icons --> */}
        <div
          className="flex items-center justify-between w-1/4 md:w-1/4 sm:w-full gap-2"
        >
          {/* <!-- Cart Button --> */}
          <div className="relative group">
            <button
              className="text-[24px] rounded-full shadow-[0_4px_6px_rgba(0,33,64,0.89)] px-2 bg-transparent border-none cursor-pointer transition-transform duration-[0.8s] hover:-translate-y-[3px] hover:shadow-lg"
            >
              <img src={carticon} alt="" width='45px'/>
            </button>
            <span
              className="invisible group-hover:visible absolute w-auto bg-[#002140]/90 text-white text-center rounded-md py-1 px-2.5 z-50 bottom-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-[0.8s] whitespace-nowrap text-sm"
            >Shopping Cart</span
            >
          </div>

          {/* <!-- Bookmark Button --> */}
          <div className="relative group">
            <button 
              className="text-[24px] rounded-full shadow-[0_4px_6px_rgba(0,33,64,0.89)] px-2 bg-transparent border-none cursor-pointer transition-transform duration-[0.8s] hover:-translate-y-[3px] hover:shadow-lg"
            >
              <img src={savedicon} alt="" width="45px" />
            </button>
            <span
              className="invisible group-hover:visible absolute w-auto bg-[#002140]/90 text-white text-center rounded-md py-1 px-2.5 z-50 bottom-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-[0.8s] whitespace-nowrap text-sm"
            >Saved Items</span
            >
          </div>

          {/* <!-- Likes Button --> */}
          <div className="relative group">
            <button
              className="text-[24px] rounded-full shadow-[0_4px_6px_rgba(0,33,64,0.89)] px-3 bg-transparent border-none cursor-pointer transition-transform duration-[0.8s] hover:-translate-y-[3px] hover:shadow-lg"
            >
              <img src={favrticon} alt="" width='45px' />
            </button>
            <span
              className="invisible group-hover:visible absolute w-auto bg-[#002140]/90 text-white text-center rounded-md py-1 px-2.5 z-50 bottom-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-[0.8s] whitespace-nowrap text-sm"
            >My Favorites</span
            >
          </div>

          {/* <!-- Notifications Button --> */}
          <div className="relative group">
            <button
              className="text-[24px] rounded-full shadow-[0_4px_6px_rgba(0,33,64,0.89)] px-2 bg-transparent border-none cursor-pointer transition-transform duration-[0.8s] hover:-translate-y-[3px] hover:shadow-lg"
            >
              <img src={notificationicon} width='45px' alt="" />
            </button>
            <span
              className="invisible group-hover:visible absolute w-auto bg-[#002140]/90 text-white text-center rounded-md py-1 px-2.5 z-50 bottom-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-[0.8s] whitespace-nowrap text-sm"
            >Notifications</span
            >
          </div>

          {/* <!-- User Account Dropdown --> */}
          <div className="relative inline-block group">
            <button
              className="text-[24px] rounded-full shadow-[0_4px_6px_rgba(0,33,64,0.89)] px-2 bg-transparent border-none cursor-pointer transition-transform duration-300 hover:-translate-y-[3px] hover:shadow-lg"
            >
              <img src={profileicon} alt="" width='45px' className='rounded-full' />
            </button>
            <div
              className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-md min-w-[160px] shadow-lg z-50 rounded-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-[0.8s]"
            >
              <div
                className="p-2 rounded-t-lg bg-[#002140] text-[#e2e4d6] font-semibold text-center border-b border-gray-200"
              >
                My Account
              </div>
              <a
                href="#"
                className="block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#002140]/10 hover:translate-x-1.5"
              >My Profile</a
              >
              <a
                href="#"
                className="block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#002140]/10 hover:translate-x-1.5"
              >Settings</a
              >
              <a
                href="#"
                className="block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#002140]/10 hover:translate-x-1.5"
              >Feedback</a
              >
              <a
                href="#"
                className="block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#002140]/10 hover:translate-x-1.5"
              >Help?</a
              >
              <a
                href="#"
                className="block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#002140]/10 hover:translate-x-1.5"
              >Report</a
              >
              <a
                href="#"
                className="block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#002140]/10 hover:translate-x-1.5"
              >Blocked</a
              >
              <a
                href="#"
                className="block px-4 py-2 font-medium transition-all duration-200 hover:bg-[#002140]/10 hover:translate-x-1.5 bg-yellow-100 text-yellow-700"
              >Upgrade to Premium</a
              >
              <a
                href="#"
                className="block px-4 py-2 text-[#002140] font-medium transition-all duration-200 hover:bg-[#002140]/10 hover:translate-x-1.5"
              >Customer Service</a
              >
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Sidebar --> */}
      <aside
        className="w-[250px] h-[calc(100vh-100px)] fixed top-[100px] left-0 bg-white/15 backdrop-blur-md p-4 border-r border-white/20 shadow-[5px_0_15px_rgba(0,0,0,0.1)] z-[5] overflow-y-hidden"
      >
        <nav
          className="flex flex-col justify-between text-[16px] font-semibold gap-4 text-[#e2e4d6]"
        >
          {/* <!-- Reusable nav-link format for all items --> */}
          <div className="relative group">
            <NavLink
              to={'/home'}
              className="nav-link group relative flex items-center gap-4 p-2 rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.5)] no-underline text-inherit hover:translate-x-[5px] hover:bg-white/25 transition-all duration-[0.8s] w-full hover:shadow-lg"
            >
              {/* <img src="/api/placeholder/35/35" className="w-[35px]" alt="Home" /> */}
              <img src={homeicon} alt="" width="32px" className='flex justify-center' />
              <span >  Home</span>
            </NavLink>
          </div>

          <div className="relative group">
            <a
              href="#"
              className="nav-link group relative flex items-center gap-4 p-2 rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.5)] no-underline text-inherit hover:translate-x-[5px] hover:bg-white/25 transition-all duration-[1.2s] w-full hover:shadow-lg"
            >
              <img src={carticon} className="w-[32px]" alt="Cart" />
              <span>Shopping</span>
            </a>
          </div>

          <div className="relative group">
            <a
              href="#"
              className="nav-link group relative flex items-center gap-4 p-2 rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.5)] no-underline text-inherit hover:translate-x-[5px] hover:bg-white/25 transition-all duration-[1.2s] w-full hover:shadow-lg"
            >
              <img src={coursesicon} className="w-[32px]" alt="Courses" />
              <span>Courses</span>
            </a>
          </div>

          <div className="relative group">
            <a
              href="#"
              className="nav-link group relative flex items-center gap-4 p-2 rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.5)] no-underline text-inherit hover:translate-x-[5px] hover:bg-white/25 transition-all duration-[1.2s] w-full hover:shadow-lg"
            >
              <img src={blogicon} className="w-[32px]" alt="Blog" />
              <span>Blogs</span>
            </a>
          </div>

          <div className="relative group">
            <a
              href="#"
              className="nav-link group relative flex items-center gap-4 p-2 rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.5)] no-underline text-inherit hover:translate-x-[5px] hover:bg-white/25 transition-all duration-[1.2s] w-full hover:shadow-lg"
            >
              <img src={inboxicon} className="w-[32px]" alt="Inbox" />
              <span>Inbox</span>
            </a>
          </div>

          <div className="relative group">
            <a
              href="#"
              className="nav-link group relative flex items-center gap-4 p-2 rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.5)] no-underline text-inherit hover:translate-x-[5px] hover:bg-white/25 transition-all duration-[1.2s] w-full hover:shadow-lg"
            >
<img src={communityicon} alt="" width='32px' />
              
              <span>Community</span>
            </a>
          </div>

          <div className="relative group">
            <a
              href="#"
              className="nav-link group relative flex items-center gap-4 p-2 rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.5)] no-underline text-inherit hover:translate-x-[5px] hover:bg-white/25 transition-all duration-[1.2s] w-full hover:shadow-lg"
            >
              <img src={cheffiicon} className="w-[32px]" alt="Chefii" />
              <span>Chefii</span>
            </a>
          </div>

          <div className="relative group">
            <a
              href="#"
              className="nav-link group relative flex items-center gap-4 p-2 rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.5)] no-underline text-inherit hover:translate-x-[5px] hover:bg-white/25 transition-all duration-[1.2s] w-full hover:shadow-lg"
            >
              <img src={tiffinicon} className="w-[32px]" alt="Tiffin" />
              <span>Tiffin</span>
            </a>
          </div>
        </nav>
      </aside>

      {/* <!-- Main Content Area --> */}
      <main
        className="ml-[250px] p-5 w-[calc(100%-250px)] mt-[100px] min-h-[calc(100vh-100px)] z-1"
      >
        {/* <!-- Main content goes here --> */}
      </main>

      <script>
        {/* // Add click event listener to all navigation links
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();

          // Remove active className from all links
          document.querySelectorAll(".nav-link").forEach((item) => {
            item.classNameList.remove(
              "bg-[#e2e4d6]",
              "text-[#002140]",
              "scale-110"
            );
            item.classNameList.add("text-[#e2e4d6]");
          });

          // Add active className to clicked link
          this.classNameList.add("bg-[#e2e4d6]", "text-[#002140]", "scale-110");
          this.classNameList.remove("text-[#e2e4d6]");
        });
      }); */}
      </script>
    </div>
  )
}

export default Navbar
