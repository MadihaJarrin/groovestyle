
const Title = ({ headTitle, subTitle }) => {
    return (
        <div className="md:w-3/12 text-center mx-auto pb-16  ">
            <p className="text-yellow-600 py-4 text-xl">-----{subTitle}-----</p>
            <p className="text-4xl uppercase border-double border-fuchsia-500 border-y-4 py-4
           font-medium text-gray-900 italic">{headTitle}</p>
        </div>
    );
};

export default Title;