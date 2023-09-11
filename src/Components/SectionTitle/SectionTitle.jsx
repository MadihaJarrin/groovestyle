
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="md:w-3/12 text-center mx-auto py-10 ">
            <p className="text-yellow-600 py-4 text-xl">-----{subHeading}-----</p>
            <p className="text-4xl uppercase border-dashed border-fuchsia-500 border-y-4 py-4 font-medium text-gray-900 italic">{heading}</p>
        </div>
    );
};

export default SectionTitle;