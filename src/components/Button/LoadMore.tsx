type LoadMoreProps = {
    onClick: () => void;
};

function LoadMore({ onClick }: Readonly<LoadMoreProps>) {
    return (
        <div className="flex justify-center mt-2">
            <button onClick={onClick} className="md:text-xl sm:text-lg text-md font-medium md:px-6 px-4 py-2 border border-yellow-500 hover:bg-yellow-500 hover:text-black">Load More...</button>
        </div>
    )
}

export default LoadMore
