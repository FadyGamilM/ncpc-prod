import React from 'react'
import abuSultan1 from "../assets/greenhouse_1.jpg"
import abuSultan2 from "../assets/greenhouse_2.jpg"
import aml1 from "../assets/greenhouse_3.jpg"
import aml2 from "../assets/greenhouse_4.jpg"
import naguib from "../assets/elhamam_home.jpg"
import ramadan from "../assets/greenhouse_6.jpg"
const Sectors = () => {
  const items = [
    {
      img: abuSultan1,
      name: "قطاع أبو سلطان (1) الزراعي"
    },
    {
      img: abuSultan2,
      name: "قطاع أبو سلطان (2) الزراعي"
    },
    {
      img: aml1,
      name: "قطاع قرية الأمل (1) الزراعي"
    },
    {
      img: aml2,
      name: "قطاع  قرية الأمل (2) الزراعي"
    },
    {
      img: naguib,
      name: "قطاع محمد نجيب الزراعي"
    },
    {
      img: ramadan,
      name: "قطاع العاشر من رمضان الزراعي"
    },
  ]
  return (
    <div className='flex container mx-auto px-3 mt-24 py-10 flex-col justify-center items-center'>
      <h2 className='font-extrabold text-6xl lg:text-5xl text-center font-elMessiri mb-20' lang='ar' dir='rtl'>قطاعات الشركة</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-12'>
        {
          items.map((item, idx) => (
            <div key={idx} className='relative group shadow-xl w-64 h-64'>
              <img src={item.img} alt="item image" className='w-64 h-64 object-cover rounded-t-3xl cursor-pointer' />
              {/* the absolute div which appears  */}
              <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-90">
                <p className='font-elMessiri'>
                  {item.name}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Sectors