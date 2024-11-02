

const Heading = ({title,subtitle}) => {
    return (
        <div className="flex flex-col w-full my-12 justify-center items-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-thin mb-4">{title}</h1>
            <p className="text-xs md:text-base lg:text-xl font-thin text-gray-600 text-center">{subtitle}</p>
        </div>
    );
};

export default Heading;