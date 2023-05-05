import { Fragment } from 'react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
    BriefcaseIcon,
    CalendarIcon,
    CloseIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
    LinkIcon,
    MapPinIcon,
    PencilIcon,
    XCircleIcon,
    
  } from "@heroicons/react/20/solid";

export default function Footer() {
  return (
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          {/* Your Logo */}
        </h2>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="ml-3 hidden sm:block">
                Aboout 
        </span>

        <span className="sm:ml-3">
         Contact
        </span>

        
      </div>
    </div>
  </div>
  )
}
