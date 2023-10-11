import React from 'react'
import { BiSolidMessageAltDots } from "react-icons/bi"

const Features = () => {
    return (
        <div className='container mx-auto px-3 mt-24 py-10 '>
            <h2 className='font-extrabold text-7xl lg:text-5xl text-center font-harmattan mb-20' lang='ar' dir='rtl'>من نحــــن ؟</h2>

            {/* The features boxes*/}
            <div className='relative container flex flex-col space-y-16 items-start px-6 mx-auto md:flex-row md:space-x-7'>
                {/* The horizontial lines */}
                <div className='hidden absolute top-24 w-10/12 left-16 h-3 bg-green-600 lg:block'>
                </div>
                {/* The vertical lines */}
                <div className='absolute w-3 left-1/2 h-full -ml-1 bg-green-600 lg:hidden'>
                </div>
                {/* The feature box itemr */}
                <div className='relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3'>
                    {/* The icon positioning */}
                    <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                        {/* the icon container for background & center */}
                        <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full bg-blue-950'>
                            <BiSolidMessageAltDots className='text-white' />
                        </div>
                    </div>
                    <h1 className='pt-6 text-xl font-bold text-center lg:text-left'>الهــدف</h1>
                    <p className='text-center font-harmattan text-xl text-gray-400 lg:text-right' lang='ar' dir='rtl'>
                        إنتاج منتجات زراعية تلبي إحتياجات السوق المحلي والمنافسة في
                        الأسواق العالمية .
                        توفير فرص عمل في جميع التخصصات المتعلقة بأنشطة الشركة في إطار
                        التنمية المجتمعية .
                        رفع الكفاءة المهنية للعاملين وإستخدام الأساليب التحفيزية لزيادة
                        الأنتاجية.
                        وضع مبادئ وركائز التحسين المستمر وتطبيق مبادئ إدارة الجودة الشاملة
                        .
                        زيادة معدلات التصدير والوصول الي الئاسواق الخارجية كأحد أهداف
                        الدولة في توفير العملات الأجنبية .
                    </p>
                </div>

                {/* The feature box itemr */}
                <div className='relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3'>
                    {/* The icon positioning */}
                    <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                        {/* the icon container for background & center */}
                        <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full bg-blue-950'>
                            <BiSolidMessageAltDots className='text-white' />
                        </div>
                    </div>
                    <h1 className='pt-6 text-xl font-bold text-center lg:text-left'>الرؤية</h1>
                    <p className='text-center font-harmattan text-xl text-gray-400 lg:text-right' lang='ar' dir='rtl'>
                        تسعي الشركة الوطنية للزراعات المحمية بأن تصبح رائدة في إنتاج
                        المنتجات الزراعية وفقاً للمعايير الصحية العالمية ، وجعل مصر مركزاً
                        إقليمياً للتنمية الزراعية ،وتهدف الركة الي أن تكون الأكثر تركيزاً
                        علي كسب ثقة المواطنين في الأسواق المحلية والإقليمية والدولية ،وتلبية
                        إحتياجات السوق المحلي والعالمي .
                    </p>
                </div>

                {/* The feature box itemr */}
                <div className='relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3'>
                    {/* The icon positioning */}
                    <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                        {/* the icon container for background & center */}
                        <div className='flex items-center justify-center w-20 h-20 p-4 rounded-full bg-blue-950'>
                            <BiSolidMessageAltDots className='text-white' />
                        </div>
                    </div>
                    <h1 className='pt-6 text-xl font-bold text-center lg:text-left'>الرسالة</h1>
                    <p className='text-center font-harmattan text-xl text-gray-400 lg:text-right' lang='ar' dir='rtl'>
                        تقديم منتج زراعي صحي امن ذو جودة عالية ومتوافق مع المعايير الدولية
                        المتعلقة بجودة وسلامة الغذاء وفقاً للمحاور الأتية :
                        1) توفير أحدث التقنيات التكنولوجية ومعايير التميز
                        2) تطوير الأداء وتنمية مهارات الكوادر البشرية للإرتقاء بالمستوي
                        العام للشركة
                        3) السعي الدائم للأفضل من خلال توفير منتجات زراعية بجودة عالية
                        وأسعار مناسبة
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Features