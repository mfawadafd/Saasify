import React, { useState } from 'react'
import Title from '../components/Title'
import useScrollReveal from '../Hooks/useScrollReveal'

const Pricing = () => {
  const [priceRef, ShowPrice] = useScrollReveal(0.3)
  const [TitleRef, ShowTitle] = useScrollReveal(0.3)
  const [billingCycle, setBillingCycle] = useState('monthly')


  const pricingData = {
    monthly: [
      {
        name: 'Starter',
        price: '$29',
        period: '/month',
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
      period: '/month',
      features:[
        {text: 'Up to 20 team members', available:true},
        {text: 'Advance analytics', available:true},
        {text:'100 GB storage', available:true},
        {text:'Priority support', available:true},
        {text:'API access', available:true},
        {text:'Custom integration', available:false},
      ]
      },
      {
        name: 'Enterprise',
      price: '$159',
      period: '/month',
      features:[
        {text: 'Unlimited team members', available:true},
        {text: 'Custom analytics', available:true},
        {text: 'Unlimited storage', available:true},
        {text:'24/7 dedicated support', available:true},
        {text:'API access', available:true},
        {text:'Custom integration', available:true},
      ]
      }
    ],
    yearly: [
      {
        name: 'Starter',
        price: '$23',
        period: '/year',
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
      period: '/year',
      features:[
        {text: 'Up to 20 team members', available:true},
        {text: 'Advance analytics', available:true},
        {text:'100 GB storage', available:true},
        {text:'Priority support', available:true},
        {text:'API access', available:true},
        {text:'Custom integration', available:false},
      ]
      },
      {
        name: 'Enterprise',
      price: '$159',
      period: '/year',
      features:[
        {text: 'Unlimited team members', available:true},
        {text: 'Custom analytics', available:true},
        {text: 'Unlimited storage', available:true},
        {text:'24/7 dedicated support', available:true},
        {text:'API access', available:true},
        {text:'Custom integration', available:true},
      ]
      }
    ]
  }
  return (
    <section className='bg-gray-50 py-20 lg:py-28'>
      <div ref={priceRef} className={`mb-4 inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 dark:purple-900/50 dark:text-purple-600 transition-all duration-700 ease-out ${ShowPrice ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} `}>
        <Title text1={'Pricing'} />
      </div>
      <div ref={TitleRef} className={`text-5xl font-bold transition-all duration-700 ease-out ${ShowTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <Title text1={'Simple, '} text2={'transparent pricing'} />
      </div>
      <p ref={TitleRef} className={`mt-4 text-lg text-gray-600 dark:text-gray-400 transition-all duration-700 ease-out ${ShowTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Choose the plan that fits your needs. All plans include a 14-day free trial.</p>

      {/* -----------Billing Toggle------------ */}
      <div className='mt-10 justify-center items-center gap-4'>
        <span>Monthly</span>
        <button onClick={()=>setBillingCycle(billingCycle === 'monthly'? 'yearly':'monthly')}
          className={`relative h-7 w-14 rounded-full ${
      billingCycle === 'yearly' ? 'bg-purple-600' : 'bg-gray-300'}`}
          >
            <span>
              
            </span>

        </button>
      </div>

    </section>
  )
}

export default Pricing
