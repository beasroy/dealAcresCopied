"use client"
import React, { useState } from 'react'
import PostModal from '../PostModal';
import FeedbackModal from '../FeedbackModal';

const SubmissionComponent = ({
    isAllSelected = true
}) => {

    const [isPostModalOpen, setIsPostModalOpen] = useState(false);
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

    const [isGDPRChecked, setIsGDPRChecked] = useState(false);
    
    const handleGDPRCheckboxChange = () => {
        setIsGDPRChecked((prevChecked) => !prevChecked);
    };

    const openPostModal = () => {
        setIsPostModalOpen(true);
    };

    const closePostModal = () => {
        setIsPostModalOpen(false);
    };
    const handlePostSubmit = (e) => {
        e.preventDefault();
        openFeedbackModal();
        closePostModal();
    };
    const openFeedbackModal = () => {
        setIsFeedbackModalOpen(true);
    };

    const closeFeedbackModal = () => {
        setIsFeedbackModalOpen(false);
    };
    const handleFeedbackSubmit = (e) => {
        e.preventDefault();

    };
    return (
        <div>

{ <><h1 className=" font-heading mb-2">GDPR Agreement *</h1>
                    <div className="flex flex-row justify-center my-2 gap-2 items-center">
                        <input
                            type='checkbox'
                            className='input-checkbox'
                            checked={isGDPRChecked}
                            onChange={handleGDPRCheckboxChange}
                        />
                        <p className="text-sm sm:text-base md:text-xl">I agree to this website &quot;Deal Acres&quot; storing my submitted information; see more details below.</p>
                    </div>
                    <div className="bg-[#f3f3f3] p-2  mt-4 text-sm md:text-base rounded-lg md:mb-8">
                        <p>The data based on a search query on Deal Acres has been made available for information/advertisement purposes. No warranty is implied for its accuracy. Nothing contained herein will be deemed to constitute any sort of legal advice, solicitation, marketing, offer of sale, an invitation to offer, or an invitation to get by the developer/builder or any other entity. You are advised to visit the relevant RERA website. And get more information about the builder and property directly. Before deciding on the project content displayed on dealacres.com. If you have any queries contact Deal Acres at contact@dealacres.com.</p>
                    </div></>}
             
                    <button
                        onClick={openPostModal}
                        className={`w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white mt-5 mb-10  hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600 ${!isGDPRChecked|| !isAllSelected ? 'cursor-not-allowed bg-gray-400' : ''
                            }`}
                        disabled={!isGDPRChecked || !isAllSelected}
                    >
                        Post Property
                    </button>

            <PostModal isOpen={isPostModalOpen} onSubmit={handlePostSubmit} />
            <FeedbackModal isOpen={isFeedbackModalOpen} onClose={closeFeedbackModal} />
        </div>
    )
}

export default SubmissionComponent
