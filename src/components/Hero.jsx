import React from 'react'
import hero from "../assets/hero.jpg"


const Hero = () => {
    return (
        <div>
            {/* Hero component container */}
            {/* in the pc screens, i will put the text on the left and the image on the right and in the mobile screens i need the image on the top then the text below it, so i have to use reverse flex col by default and manage the pc screen using the md: or lg: tages :D */}
            <div className='container flex flex-col-reverse mx-auto lg:flex-row '>
                {/* Content Text container */}
                <div className='flex flex-col lg:w-1/2 text-center items-center justify-center space-y-10 lg:mt-16 xl:mb-52' >

                    <h1 className='font-extrabold text-5xl lg:text-3xl text-green-900 text-center' >
                        NCPC - National Company For Protective Cultivation
                    </h1>

                    <p className='font-bold text-xl md:text-2xl font-arabic' lang='ar' dir='rtl'>
                        الشركة الوطنية للزراعات المحمية هي شركة مساهمة حكومية مصرية، تابعة لجهاز مشروعات الخدمة الوطنية للقوات المسلحة أحد أجهزة وزارة الدفاع، أنشأت سنة 2016 بهدف تحقيق الاكتفاء الذاتي من الخضروات والفاكهة من خلال الزراعة في الصوب الزجاجية، ويبلغ الصوب المستخدمة والجاري إنشائها في مشروعات الشركة حوالي 100 ألف صوبة.
                    </p>

                    <div className='mx-auto lg:mx-0'>
                        <a className='py-5 px-5 text-2xl font-bold text-white bg-green-500 rounded-full lg:py-4 hover:opacity-70'
                            href='https://earth.google.com/web/search/%d8%a7%d9%84%d8%b4%d8%b1%d9%83%d8%a9+%d8%a7%d9%84%d9%88%d8%b7%d9%86%d9%8a%d8%a9+%d9%84%d9%84%d8%b2%d8%b1%d8%a7%d8%b9%d8%a7%d8%aa+%d8%a7%d9%84%d9%85%d8%ad%d9%85%d9%8a%d8%a9/@30.0106934,31.4411562,278.70837238a,900.1892501d,35y,0h,45t,0r/data=CqUBGnsSdQokMHgxNDU4M2QzNzBkMjg2ZTA5OjB4ZTZhNWY5ZTg1YWEyNDllGXVIe828Aj5AIXlt25zvcD9AKjvYp9mE2LTYsdmD2Kkg2KfZhNmI2LfZhtmK2Kkg2YTZhNiy2LHYp9i52KfYqiDYp9mE2YXYrdmF2YrYqRgCIAEiJgokCZIbr9zsZj5AEX_jnBCxYz5AGUQTK_wfHkBAIbXPdPlHHEBAKAI6AwoBMA'>
                            موقع رئاسة الشركة
                        </a>
                    </div>
                </div>
                {/* Content Image container */}
                <div className='mb-24 mt-10 mx-auto lg:w-1/2 lg:ml-12 lg:mb-0'>
                    <img src={hero} alt="hero" className='shadow-lg rounded-2xl' />
                </div>
            </div>

        </div>
    )
}

export default Hero