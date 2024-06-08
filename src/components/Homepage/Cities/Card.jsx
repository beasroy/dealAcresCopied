import Image from "next/image";
const Card = ({ title, content }) => {
  return (
    <div className=" bg-white shadow-customindigo shadow-md to-white border-blue-100 bg-opacity-70 hover:border rounded-xl h-24 sm:h-20 w-full md:mb-3 sm:w-64 md:w-[14.8rem]   hover:shadow-blue-200 hover:shadow-sm  flex ">
      <div className="flex-shrink-0 h-24 sm:h-20  w-1/3 md:w-1/4 rounded-tl-xl rounded-bl-xl overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src="/home.jpg"
          height={96}
          width={96}
          alt="Image Description"
        />
      </div>
      <div className="flex flex-wrap w-2/3 md:w-3/4">
        <div className="py-1 xs:py-2 sm:py-3 pl-2 flex flex-col h-full">
          <h3 className="text-sm xs:text-base sm:text-lg font-bold text-gray-800">
            {title}
          </h3>
          <p className="mt-1 text-xs text-gray-800 sm:max-w-sm">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
