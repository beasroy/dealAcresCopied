import Image from "next/image";

const PostModal = ({ isOpen, onSubmit }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto bg-gray-300 bg-opacity-80">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="relative bg-white w-full max-w-md p-6 rounded-lg shadow-md custom-border-3">

              <button
                className="absolute top-0 right-0 w-6 bg-blue-200 text-gray-700 "
                onClick={onSubmit}
              >
                &times;
              </button>
              <div className="flex flex-col items-center gap-5">
                <Image src={'/propertyListing/assets/checkicon.png'} className="max-md:w-[50px] max-md:h-[50px] " alt="post" width={80} height={80} />
              <h1 className="text-2xl md:text-4xl font-bold mb-4 uppercase italic">submitted</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostModal;
