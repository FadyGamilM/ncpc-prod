import React from 'react'
import logo from "../assets/logo.png"

const Footer = () => {
    return (
        // <div className='py-16 bg-teal-950 mb-0 sm:mb-0 md:mb-0 lg:mb-0'>
        //     <div className='container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start'>
        //         {/* The Logo flex child */}
        //         <div className='flex items-center w-48'>
        //             <img src={logo} alt="logo" className='' />
        //         </div>
        //     </div>
        // </div>
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-12 mx-auto">
                <div>
                    <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
                        الشركة الوطنية للزراعات المحمية
                    </h1>
                    <p class="font-medium text-blue-500 dark:text-blue-400">تواصل معنا</p>


                    <p class="mt-3 text-gray-500 dark:text-gray-400">عمل - انتاج - تنمية</p>
                </div>

                <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </span>

                        <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
                        <p class="mt-2 text-gray-500 dark:text-gray-400">يمكنك التواصل معنا دائما عبر الاميل الالكتروني</p>
                        <p class="mt-2 text-blue-500 dark:text-blue-400">ncpc@nspo.com.eg</p>
                    </div>

                    <div>
                        <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </span>

                        <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">Office</h2>
                        <p class="mt-2 text-gray-500 dark:text-gray-400">المقر الرئيسي لرئاسة الشركة</p>
                        <p class="mt-2 text-blue-500 dark:text-blue-400">التجمع الخامس، الحي الثاني، بجوار شركة الكهرباء</p>
                    </div>

                    <div>
                        <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </span>

                        <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">Phone</h2>
                        <p class="mt-2 text-gray-500 dark:text-gray-400">يمكنك التواصل معنا عبر الهاتف المحمول</p>
                        <p class="mt-2 text-blue-500 dark:text-blue-400">(+20) 1050620321</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer