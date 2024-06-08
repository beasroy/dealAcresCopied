import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

const SignupPopup = ({ handleOpenOtpPopup, handleOpenSignInPopup, onClose, tabs }) => {

    const [tab, setTab] = useState(tabs);
    const [select, setSelect] = useState();
    const [businessOptions, setBusinessOptions] = useState([]);

    const switchTab = (newTab) => {
        setTab(newTab);
    };

    const switchSelect = (newSelect) => {
        setSelect(newSelect);

        if (newSelect === 'Free Property Listing') {
            setBusinessOptions([
                'Owner',
                'Buyer',
                'Agent',
                'Developer'
            ]);
        } else if (newSelect === 'Business Listing') {
            setBusinessOptions([
                'Rent Agreement',
                'Home Loan',
                'Property Valuer',
                'Legal Services',
                'Chartered Accountant',
                'Home Décor',
                'Home Interior',
                'Vastu Shastra',
                'Furniture Dealer',
                'Modular Kitchen',
                'Construction Contractor',
                'Electronic Goods Dealer',
                'Packer & Movers',
                'Pest Control',
                'Solar Product Dealer',
                'Carpenter',
                'Plumbing Contractor',
                'Security System Dealer',
                'Sanitary Dealer',
                'Painting Service',
                'Flooring & Marble Dealer'
            ]);
        }
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        handleOpenOtpPopup();
    };

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        handleOpenSignInPopup();
    }

    return (
        <div className="fixed z-20 inset-1 bg-black bg-opacity-50 flex items-center justify-center mx-2 md:mx-0">
            <div className="relative bg-white w-full max-w-sm mx-auto rounded-lg shadow-lg border-2 border-blue-200 max-h-full overflow-hidden">
                <div className="flex justify-between border-b border-gray-200">
                    <div className="flex w-[70%]">
                        <div className={`flex-1 p-3 text-center cursor-pointer ${tab === 'SignIn' ? 'font-semibold text-white bg-blue-600' : ''}`} onClick={() => switchTab('SignIn')}>
                            Sign In
                        </div>
                        <div className="h-full border-r-2 border-gray-200"></div>
                        <div className={`flex-1 p-3 text-center cursor-pointer ${tab === 'SignUp' ? 'font-semibold text-white bg-blue-600' : ''}`} onClick={() => switchTab('SignUp')}>
                            Sign Up
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 p-2 text-gray-600 cursor-pointer" onClick={onClose}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="p-5 overflow-y-auto max-h-[calc(100vh-100px)]">
                    {tab === 'SignIn' && (
                        <form onSubmit={handleSignInSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-bold text-gray-700 text-left">Email</label>
                                <input type="email" className="mt-1 px-2 block w-full rounded-2xl border-2 border-blue-200" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-bold text-gray-700 text-left">Password</label>
                                <input type="password" className="mt-1 px-2 block w-full rounded-2xl border-2 border-blue-200" />
                            </div>
                            <div className='mb-4 flex flex-row justify-between'>
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    <div className="text-xs">Remember Me</div>
                                </div>
                                <div className='text-blue-600 text-xs cursor-pointer'>Lost your Password?</div>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md">Sign In</button>
                        </form>
                    )}
                    {tab === 'SignUp' && (
                        <form onSubmit={handleSignUpSubmit}>
                            <div className="mb-3">
                                <label className="block text-sm font-bold text-gray-700 text-left">Name</label>
                                <input type="text" className="mt-1 px-2 py-1 text-xs block w-full rounded-2xl border-2 border-blue-200" />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-bold text-gray-700 text-left">Mobile Number</label>
                                <input type="text" className="mt-1 px-2 py-1 text-xs block w-full rounded-2xl border-2 border-blue-200" />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-bold text-gray-700 text-left">Email*</label>
                                <input type="email" className="mt-1 px-2 py-1 text-xs block w-full rounded-2xl border-2 border-blue-200" />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-bold text-gray-700 text-left">Type of listing</label>
                                <div className='mt-1 flex rounded-2xl border-2 border-blue-200 justify-between'>
                                    <div className={`w-full rounded-l-2xl text-xs px-2 py-1 cursor-pointer ${select === 'Free Property Listing' ? 'text-white bg-blue-600' : ''}`} onClick={() => switchSelect('Free Property Listing')}>
                                        Free Property Listing
                                    </div>
                                    <div className={`w-full rounded-r-2xl text-xs px-2 py-1 cursor-pointer ${select === 'Business Listing' ? 'text-white bg-blue-600' : ''}`} onClick={() => switchSelect('Business Listing')}>
                                        Business Listing
                                    </div>
                                </div>
                            </div>
                            {select && (
                                <div className="mb-3">
                                    <label className="block text-sm font-bold text-gray-700 text-left">{select === 'Free Property Listing' ? 'Select your account type*' : 'Type of Business'}</label>
                                    <select className="mt-1 px-2 py-1 block w-full rounded-2xl border-2 border-blue-200 text-xs">
                                        {businessOptions.map((option, index) => (
                                            <option key={index} value={option} className='text-xs'>{option}</option>
                                        ))}
                                    </select>
                                </div>
                            )}
                            <div className="mb-3">
                                <label className="block text-sm font-bold text-gray-700 text-left">Username</label>
                                <input type="text" className="mt-1 px-2 py-1 text-xs block w-full rounded-2xl border-2 border-blue-200" />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-bold text-gray-700 text-left">Password</label>
                                <input type="password" className="mt-1 px-2 py-1 text-xs block w-full rounded-2xl border-2 border-blue-200" />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-bold text-gray-700 text-left">Retype Password</label>
                                <input type="password" className="mt-1 px-2 py-1 text-xs block w-full rounded-2xl border-2 border-blue-200" />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md">Sign Up</button>
                            <div className='mt-3 flex flex-row items-center gap-2 justify-center'>
                                <FcGoogle className='w-6 h-6' />
                                <div className='text-xs'>Sign In With Google</div>
                            </div>
                            <div className='mt-2 flex flex-row items-center gap-2 justify-center'>
                                <FaFacebookSquare className='w-6 h-6' color='blue' />
                                <div className='text-xs'>Sign In With Facebook</div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SignupPopup;
