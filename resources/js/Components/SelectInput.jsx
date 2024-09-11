import { Select } from '@headlessui/react';
import { forwardRef, useRef } from 'react';

export default forwardRef(function SelectInput({ className = '', children, ...props }, ref) {
    const input = ref ? ref : useRef();

    return (
        <div className="relative">
            <select
                {...props}
                className={
                    'border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 rounded-full px-4 py-2 shadow-md w-full ' + 
                    className
                }
                ref={input}
            >
                {children}
            </select>
            <div className="absolute right-3 top-2 pointer-events-none">
    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
</div>

        </div>
    );
});
