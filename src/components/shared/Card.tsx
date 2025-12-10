interface CardProps {
  children: React.ReactNode;
}
const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-gray border border-gray-200 p-5 rounded-xl">
      {children}
    </div>
  );
};

export default Card;
