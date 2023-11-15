import React from 'react'
import naguibLocation from "../assets/naguib_map.png"

const NaguibLocation = () => {
    return (
        <div>
            <section className="bg-transparent flex justify-center items-center">
                <div className="px-6 py-10 mx-auto">
                    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={naguibLocation} alt="" />

                        <div className='mx-auto lg:mx-0'>
                            <a className='py-5 px-5 text-2xl font-bold text-white bg-green-500 rounded-full lg:py-4 hover:opacity-70'
                                href='https://earth.google.com/web/search/%d8%a7%d9%84%d8%b4%d8%b1%d9%83%d8%a9+%d8%a7%d9%84%d9%88%d8%b7%d9%86%d9%8a%d8%a9+%d9%84%d9%84%d8%b2%d8%b1%d8%a7%d8%b9%d8%a7%d8%aa+%d8%a7%d9%84%d9%85%d8%ad%d9%85%d9%8a%d8%a9/@30.0106934,31.4411562,278.70837238a,900.1892501d,35y,0h,45t,0r/data=CqUBGnsSdQokMHgxNDU4M2QzNzBkMjg2ZTA5OjB4ZTZhNWY5ZTg1YWEyNDllGXVIe828Aj5AIXlt25zvcD9AKjvYp9mE2LTYsdmD2Kkg2KfZhNmI2LfZhtmK2Kkg2YTZhNiy2LHYp9i52KfYqiDYp9mE2YXYrdmF2YrYqRgCIAEiJgokCZIbr9zsZj5AEX_jnBCxYz5AGUQTK_wfHkBAIbXPdPlHHEBAKAI6AwoBMA'>
                                موقع قطاع محمد نجيب
                            </a>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default NaguibLocation