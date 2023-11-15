import React from 'react'
import logo from "../assets/logo.png"
import Dropdown from './Dropdown'

const Navbar = () => {
    return (
        <div>
            {/* navbar container */}
            {/* The nav is relative because we will have the humborger menu and it will be absolute */}
            <nav className='relative container p-6 mx-auto'>
                {/* we will have a parent flex and has 2 flex childs */}
                <div className='flex items-center justify-between text-center'>
                    {/* The Logo flex child */}
                    <div className='flex items-center w-48'>
                        <img src={logo} alt="logo.png" />
                    </div>
                    {/* The navigation buttons flex child */}
                    {/* hidden in small screens and flex on md and lg screen*/}
                    <div className='hidden md:flex items-center space-x-6 font-bold text-slate-500 '>
                        {/* nav button item */}
                        <div className='group hover:text-black'>
                            <a className='font-extrabold text-2xl font-harmattan' lang='ar' dir='rtl' href='#'>
                                المشاتل
                            </a>
                            {/* The border */}
                            <div className='mx-2 mt-1 duration-500 border-b-4 border-black opacity-0 group-hover:opacity-100'></div>
                        </div>



                        {/* nav button item */}
                        <div className='group hover:text-black'>
                            <a className='font-extrabold text-2xl font-harmattan' lang='ar' dir='rtl' href='#'>المنافذ</a>
                            {/* The border */}
                            <div className='mx-2 mt-1 duration-500 border-b-4 border-black opacity-0 group-hover:opacity-100'></div>
                        </div>
                        {/* nav button item */}
                        <Dropdown />
                        {/* <div className='group hover:text-black'>
                            <a className='font-extrabold text-2xl font-harmattan' lang='ar' dir='rtl' href='#'>القطاعات</a>
                            <div className='mx-2 mt-1 duration-500 border-b-4 border-black opacity-0 group-hover:opacity-100'></div>
                        </div> */}
                    </div>
                    {/* // TODO => hamburger menu*/}
                </div>
                {/* // TODO => mobile menu */}

            </nav>
        </div>
    )
}

export default Navbar


/*

https://earth.google.com/web/search/%d9%82%d8%b7%d8%a7%d8%b9+%d9%85%d8%ad%d9%85%d8%af+%d9%86%d8%ac%d9%8a%d8%a8+%d9%84%d8%b2%d8%b1%d8%b9%d8%a7%d8%aa+%d8%a7%d9%84%d9%85%d8%ad%d9%85%d9%8a%d8%a9%d8%8c+El+Hamam/@30.7441162,29.222337,68.81462719a,974.22955612d,35y,0h,45t,0r/data=CrIBGocBEoABCiUweDE0NWY5MWM2ZTMxNWM4Zjc6MHg5ZjVkODQ2ZjIyYTVmM2E3GX1sN2Z-vj5AIdWw3xPrOD1AKkXZgti32KfYuSDZhdit2YXYryDZhtis2YrYqCDZhNmE2LLYsdin2LnYp9iqINin2YTZhdit2YXZitip2IwgRWwgSGFtYW0YAiABIiYKJAmvV5k6QL8-QBHUVIiQvL0-QBnnqdWGuzk9QCHCt-mgGjg9QDoDCgEw

*/