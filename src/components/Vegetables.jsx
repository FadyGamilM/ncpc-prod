import React from 'react'
import mango from "../assets/mango.jpg"
import tomato from "../assets/tomato.jpg"
import romyAlwan from "../assets/romy.jpg"
import felfel7aref from "../assets/7areef.jpg"
import hallbeno from "../assets/hallbeno.jpg"
import khyar from "../assets/khyar.jpg"
import red_cromb from "../assets/red_cromb.jpg"
import carrot from "../assets/carrot.jpg"
import botato from "../assets/botato.jpg"

const items = [
    {
        img: mango,
        name: "منتج المانجا"
    },
    {
        img: tomato,
        name: "منتج الطماطم"
    },
    {
        img: romyAlwan,
        name: "منتج الفلفل الرومي الالوان"
    },
    {
        img: felfel7aref,
        name: "منتج الفلفل الحريف"
    },
    {
        img: hallbeno,
        name: "منتج الفلفل الهالبينو"
    },
    {
        img: khyar,
        name: "منتج الخيار"
    },
    {
        img: red_cromb,
        name: "منتج الكرومب الاحمر"
    },
    {
        img: carrot,
        name: "منتج الجزر"
    },
    {
        img: botato,
        name: "منتج البطاطس"
    },

]

const Vegetables = () => {
    return (
        // <div className='pl-10 pr-10'>

        //     <div className='container grid grid-cols-2 mx-auto gap-4 md:grid-cols-3  pb-10'>

        //         {
        //             items.map((item, idx) => (
        //                 <div key={idx} className='relative group'>
        //                     <img src={item.img} alt="item image" className='w-64 h-64 object-cover' />
        //                 </div>
        //             ))
        //         }
        //     </div>
        // </div>
        <div className='flex container mx-auto px-3 mt-24 py-10 flex-col justify-center items-center'>
            <h2 className='font-extrabold text-6xl lg:text-5xl text-center font-elMessiri mb-20' lang='ar' dir='rtl'>مــنتجات الشركة</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-12'>
                {
                    items.map((item, idx) => (
                        <div key={idx} className='relative group shadow-xl w-64 h-64'>
                            <img src={item.img} alt="item image" className='w-64 h-64 object-cover rounded-t-3xl' />
                            {/* the absolute div which appears  */}
                            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
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

export default Vegetables