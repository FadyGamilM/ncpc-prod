import React from 'react'
import logo from "../assets/logo.png"

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
                        <img src={logo} alt="logo" />
                    </div>
                    {/* The navigation buttons flex child */}
                    {/* hidden in small screens and flex on md and lg screen*/}
                    <div className='hidden md:flex items-center space-x-6 font-bold text-slate-500 '>
                        {/* nav button item */}
                        <div className='group hover:text-black'>
                            <a className='font-extrabold text-2xl font-harmattan' lang='ar' dir='rtl' href='#'>المشاتل</a>
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
                        <div className='group hover:text-black'>
                            <a className='font-extrabold text-2xl font-harmattan' lang='ar' dir='rtl' href='#'>القطاعات</a>
                            {/* The border */}
                            <div className='mx-2 mt-1 duration-500 border-b-4 border-black opacity-0 group-hover:opacity-100'></div>
                        </div>
                    </div>
                    {/* // TODO => hamburger menu*/}
                </div>
                {/* // TODO => mobile menu */}

            </nav>
        </div>
    )
}

export default Navbar