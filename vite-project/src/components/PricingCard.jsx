import React from 'react'
import { X } from 'lucide-react';
import { Check } from 'lucide-react';

const PricingCard = ({plan}) => {
    const isPopular = plan.popular
  return (
    <div
    className={`relative rounded-xl border p-6  ${
        isPopular
         ? 'border-purple-600 bg-white text-gray-900 scale-105' : 'border-gray-200 bg-white text-gray-900'
    }`}
    >
        {isPopular && (
            <span className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 mb-4 inline-block rounded-full bg-purple-600 px-3 py-1 text-xs font-medium text-white'>
                Most Popular
            </span>
        )}

        <h3 className='text-xl font-bold'>{plan.name}</h3>

        <div className="mt-4">
            <span className='text-4xl font-bold'>{plan.price}</span>
            <span className={isPopular ? 'text-gray-400':'text-gray-500'}>
                {plan.period}
            </span>
        </div>

        <div className='mt-2'>
            <p className=' font-semibold text-gray-400'>{plan.billed}</p>
        </div>

        <ul className='mt-6 space-y-3'>
            {plan.features.map((feature)=>(
                <li
                key={feature.text}
                className={
                    feature.available ? isPopular ? 'text-gray-900': 'text-gray-700': isPopular ? 'text-gray-300 line-through' : 'text-gray-400 line-through' 
                }
                >
                    {feature.available ? <Check/> : <X/> } {feature.text}
                </li>
            ))}
        </ul>
        <button
        className={`mt-6 w-full rounded-md py-3 font-medium ${
          isPopular
            ? 'bg-purple-600 text-white'
            : 'bg-white text-white'
        }`}
      >
        Get Started
      </button>

    </div>
  )
}

export default PricingCard