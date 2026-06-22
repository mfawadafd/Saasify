import React from 'react'
import useScrollReveal from '../Hooks/useScrollReveal'
import Card from '../components/Card'

const Features = () => {
  const [FeaturesRef, showFeatures] = useScrollReveal(0.3)
  const [H2textRef, showH2text] = useScrollReveal(0.3)
  const [CardRef, showCard] = useScrollReveal(0.3)


 const featuresData =[
  {
    icons: <svg class="h-7 w-7  hover-text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>,
    heading:'Workflow Automation',
    para:'Automate repetitive tasks and focus on what matters. Set up triggers, actions, and conditions without code.'
  },
  {
    icons: <svg class="h-7 w-7  hover-text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>,
    heading:'Real-time Collaboration',
    para:'Work together seamlessly with live cursors, comments, and instant sync across all devices.'
  },
  {
    icons: <svg class="h-7 w-7  hover-text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>,
    heading:'Advanced Analytics',
    para:'Get deep insights into your teams performance with customizable dashboards and reports.'
  },
  {
    icons: <svg class="h-7 w-7  hover-text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>,
    heading:'Enterprise Security',
    para:'Bank-grade encryption, SSO, audit logs, and compliance certifications for peace of mind.'
  },
  {
    icons: <svg class="h-7 w-7  hover-text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>,
    heading:'API & Integrations',
    para:'Connect with 50+ tools you already use. REST API and webhooks for custom integrations.'
  },
  {
    icons: <svg class="h-7 w-7  hover-text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>,
    heading:'24/7 Support',
    para:'Get help when you need it with our dedicated support team and comprehensive documentation.'
  }
 ]

  return (
    <section  className='bg-gray-50 py-20 lg:py-28 dark:bg-gray-100'>
      <div className='mx-auto max-w-3xl text-center'>
      <div ref={FeaturesRef} className={`mb-4 inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 dark:purple-900/50 dark:text-purple-600 transition-all duration-700 ease-out ${showFeatures ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        Features
      </div>
      <h2 ref={H2textRef} className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-black transition-all duration-700 ease-out ${showH2text ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Everything you need to ship faster</h2>
      <p className='mt-4 text-lg text-gray-600 dark:text-gray-400'> Powerful tools designed to streamline your workflow and boost team productivity. </p>
      </div>


      <div ref={CardRef} className={`mx-auto mt-16 grid max-w-6xl px-4 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${showCard ? 'opacity-100 translate-y-0': 'opacity-0 translate-y-6'}`}>
        {featuresData.map((item, index)=>(
          <Card key={index} icons={item.icons} heading={item.heading} para={item.para}/>
        ))}
        </div>

      
        
    </section>
  )
}

export default Features