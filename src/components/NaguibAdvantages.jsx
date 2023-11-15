import React from 'react'

const NaguibAdvantages = () => {
    return (
        <section class="bg-transparent " dir='rtl'>
            <div class="container px-6 py-10 mx-auto">
                <div class="mt-6 md:flex md:items-center md:justify-between">
                    <div>
                        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
                            مميزات قطاع محمد نجيب الزراعي
                        </h1>

                        <div class="flex mx-auto mt-6">
                            <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                            <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                            <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                        </div>
                    </div>
                </div>

                <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                    <div class="p-8 border rounded-lg dark:border-gray-700">
                        <p class="leading-loose text-gray-900 dark:text-gray-800 font-bold" lang='ar' dir='ltr'>
                            يتميز قطاع محمد نجيب الزراعي بمساحة 10 آلاف فدان، يضم 1302 بيت زراعي،7 آلاف فدان بالإضافة الي المشاتل، وكذلك 2785 فدان زراعات مكشوفة
                        </p>
                    </div>

                    <div class="p-8 border rounded-lg dark:border-gray-700">
                        <p class="leading-loose text-gray-900 dark:text-gray-800 font-bold">
                            يضم القطاع أرقي محطات الفرز والتعبئة واكبر مجمع انتاج بذور من نوعه
                        </p>
                    </div>

                    <div class="p-8 border rounded-lg dark:border-gray-700">
                        <p class="leading-loose text-gray-900 dark:text-gray-800 font-bold">
                            يتميز محمد نجيب بقربة من مواني الاسكندرية والدخيلة ومطار برج العرب لتحقيق افضل السبل لتصدير منتجاته لدول العالم
                        </p>
                    </div>

                    <div class="p-8 border rounded-lg dark:border-gray-700">
                        <p class="leading-loose text-gray-900 dark:text-gray-800 font-bold">
                            يقع قطاع محمد نجيب بالقرب من طريق العالمين والطريق الدولي الساحلي وطريق مصر اسكندرية الصحراوي مما يسهل نقل منتجاته الزراعية لكل المحافظات المصرية
                        </p>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default NaguibAdvantages

