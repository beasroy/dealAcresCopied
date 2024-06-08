import PrivacyBanner from '@/components/privacy-policy/PrivacyBanner'
import ContactStrip from '@/components/safety/ContactStrip'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className='md:px-4 max-w-screen-xl mx-auto'>

      <div className='  border border-l-gray-500 mb-2 '>
        <PrivacyBanner/>

      </div>


      <div className='px-4 md:px-0'>


        <p className="font-normal text-[14px] text-justify" >This Privacy policy is subjected in the terms of Site Policy of Deal Acres. Its claim is one approach to keep you confident in our business, our goods, and our services. As you browse our website, our privacy statement explains how we gather, safeguard, and use information about you. Please read our Privacy Policy and our Terms and condition carefully before using our Services. </p><br />

        <p className="font-normal text-[14px]  text-justify" >Deal Acres is dedicated to protecting its users’ privacy in all respects and values it. Deal Acres offers a Online Sites and a variety of community services with the goal of providing its users with the most enriching and comprehensive internet experience possible. </p><br />

        <p className="font-normal text-[14px]  text-justify" >When you fill out an application or other forms on our website, we may obtain personal information from you, such as your name, address, phone number, and email address. </p><br />

        <p className="font-normal text-[14px]  text-justify" >When you visit our site, we might gather and keep anonymous, aggregate data about your visit. We analyze this data to assess site usage and generate suggestions for enhancing our website. This data may include the date and time of your visit, the number of web pages you see while visiting our site, and other statistics. </p><br />

        <p className="font-normal text-[14px]  text-justify" >We may share information about you, including your email address, contact information, and property request, with an agent in our company if you have requested to be contacted by an agent or to acquire information on an available property. Our online inquiry manager receives all emails that are generated through our website’s email forms. Information about you is not shared by us to any parties outside of our business. </p><br />

        <p className="font-normal text-[14px]  text-justify" >We are dedicated to keeping all of our customers’ information accurate and maintain. When you are connected into our website, you always have access to your account information online. You can change information if you are a customer and have registered for internet access on our website. </p><br />

        <p className="font-normal text-[14px]  text-justify" >We limit access to information obtained from our website and web pages to our employees only, and to a Deal Acres agent only if your inquiry requires assistance from an agent, such as a request for more information or a property viewing. We uphold procedural, electronic, and physical security measures to guard against unauthorized access to personal data. </p><br />


        <p className="font-normal text-[14px]  text-justify" >The third parties we hire to provide services for us, such hosting, website development, and support, who have access to personal information have agreed not to share it or use it for any other reason than to carry out the requested services. </p><br />


        <p className="font-normal text-[14px]  text-justify" >Deal Acres reserves the right, in its sole discretion, to modify this Privacy Statement or change its privacy principles without prior notice to you. Any changes to our privacy statement or our privacy values will be promptly publicized on our website. You agree to this privacy policy by using or registering for the website. You cannot use the website if you disagree with our privacy policy. </p><br />

        <p className="font-normal text-[14px]  text-justify" >The Website offers secure and protected transactions. To safeguard the User from unintended disclosure to third parties, all information entered by the User when transacting on the Website is encrypted. The Company/Website in no way receives, stores, or retains the User’s credit and debit card information. </p><br />

        <p className="font-normal text-[14px]  text-justify" >The User provides this information directly to the appropriate payment gateway, which is authorized to handle it and adheres to the rules and specifications of the various banks, institutions, and payment franchisees with which it is associated. </p><br />


        <p className="font-normal text-[14px]  text-justify" >Using “cookie” technology, certain of our website’s features may track user activity and adjust content to their preferences. A cookie is a piece of information that a website can transmit to your browser, which may then store the cookie on your hard drive. So, when you return to our website, we can personalize the information to your specific preferences. Your stay will be more enjoyable and efficient as a result. </p>

      </div>

      <div className='my-2 pb-4 md:py-4 '>
        <h2 className='font-bold text-xl md:text-2xl text-center py-4'>
          Need to get in touch?
        </h2>
        <ContactStrip />
      </div>

    </div>
  )
}

export default PrivacyPolicy
