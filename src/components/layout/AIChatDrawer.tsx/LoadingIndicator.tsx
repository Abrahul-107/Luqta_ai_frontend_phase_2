const LoadingIndicator: React.FC = () => {
  return (
    <div className="justify-start flex">
      <div className="bg-gray-100 text-gray-400 text-sm px-4 py-2 rounded-2xl animate-pulse">
        Luqta AI is typing...
      </div>
    </div>
  );
};

export default LoadingIndicator;
