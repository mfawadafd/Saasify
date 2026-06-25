import React, { useState } from 'react'
import Title from '../components/Title'
import useScrollReveal from '../Hooks/useScrollReveal'
import PricingCard from '../components/PricingCard'

const Pricing = () => {
  const [priceRef, ShowPrice] = useScrollReveal(0.3)
  const [TitleRef, ShowTitle] = useScrollReveal(0.3)
  const [PricingRef, ShowPricing] = useScrollReveal(0.3)
  const [billingCycle, setBillingCycle] = useState('monthly')


  const pricingData = {
    monthly: [
      {
        name: 'Starter',
        price: '$29',
        period: '/month',
        billed: 'Billed monthly',
        features: [
          { text: 'Up to 5 team members', available: true },
          { text: 'Basic analytics', available: true },
          { text: '10 GB storage', available: true },
          { text: 'Email support', available: true },
          { text: 'API access', available: false },
          { text: 'Custom integrations', available: false },
        ]
      },
      {
        name: 'Pro',
        price: '$79',
        popular: true,
        period: '/month',
        billed: 'Billed monthly',
        features: [
          { text: 'Up to 20 team members', available: true },
          { text: 'Advance analytics', available: true },
          { text: '100 GB storage', available: true },
          { text: 'Priority support', available: true },
          { text: 'API access', available: true },
          { text: 'Custom integration', available: false },
        ]
      },

      {
        name: 'Enterprise',
        price: '$159',
        period: '/month',
        billed: 'Billed monthly',
        features: [
          { text: 'Unlimited team members', available: true },
          { text: 'Custom analytics', available: true },
          { text: 'Unlimited storage', available: true },
          { text: '24/7 dedicated support', available: true },
          { text: 'API access', available: true },
          { text: 'Custom integration', available: true },
        ]
      }
    ],
    yearly: [
      {
        name: 'Starter',
        price: '$23',
        period: '/year',
        billed: 'Billed annually ($756/year)',
        features: [
          { text: 'Up to 5 team members', available: true },
          { text: 'Basic analytics', available: true },
          { text: '10 GB storage', available: true },
          { text: 'Email support', available: true },
          { text: 'API access', available: false },
          { text: 'Custom integrations', available: false },
        ]
      },
      {
        name: 'Pro',
        price: '$63',
        popular: true,
        period: '/year',
        billed: 'Billed annually ($756/year)',
        features: [
          { text: 'Up to 20 team members', available: true },
          { text: 'Advance analytics', available: true },
          { text: '100 GB storage', available: true },
          { text: 'Priority support', available: true },
          { text: 'API access', available: true },
          { text: 'Custom integration', available: false },
        ]
      },
      {
        name: 'Enterprise',
        price: '$159',
        period: '/year',
        billed: 'Billed annually ($756/year)',
        features: [
          { text: 'Unlimited team members', available: true },
          { text: 'Custom analytics', available: true },
          { text: 'Unlimited storage', available: true },
          { text: '24/7 dedicated support', available: true },
          { text: 'API access', available: true },
          { text: 'Custom integration', available: true },
        ]
      }
    ]
  }
  return (
    <section className='bg-gray-50 py-20 lg:py-28 text-center '>
      <div ref={priceRef} className={`mb-4 inline-flex items-center  rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 dark:bg-purple-900/50 dark:text-purple-600 transition-all duration-700 ease-out ${ShowPrice ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} `}>
        <Title text1={'Pricing'} />
      </div>
      <div ref={TitleRef} className={`text-5xl font-bold transition-all duration-700 ease-out ${ShowTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <Title text1={'Simple, '} text2={'transparent pricing'} />
      </div>
      <p ref={TitleRef} className={`mt-4 text-center text-lg text-gray-600 dark:text-gray-400 transition-all duration-700 ease-out ${ShowTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Choose the plan that fits your needs. All plans include a 14-day free trial.</p>

      {/* -----------Billing Toggle------------ */}
      <div ref={PricingRef} className={`mt-10 flex flex-wrap justify-center items-center gap-2 md:gap-4 transition-all duration-700 ease-out ${ShowPricing ? "opacity-100 translate-y-0" : " opacity-0 translate-y-6"}`}>
        <span className={`text-sm font-medium px-2 md:px-4 py-1 md:py-2 ${
      billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-400'
    }`}>Monthly</span>

        <button onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
          className={`relative h-6 w-12 rounded-full ${billingCycle === 'yearly' ? 'bg-purple-600' : 'bg-gray-300'}`}
        >
          <span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${billingCycle === 'yearly' ? 'left-7' : 'left-1'}`}
          />
        </button>

        <span 
         className={`text-sm font-medium px-2 md:px-4 py-1 md:py-2 ${
      billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-400'
    }`}
        >Yearly</span>
        <span className='rounded-full bg-green-100 px-3 py-1 text-xs text-green-700 whitespace-nowrap'>Save 20%</span>
      </div>

      <div className='mt-12 grid gap-6 md:grid-cols-3'>
        {pricingData[billingCycle].map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>


    </section>
  )
}

export default Pricing
