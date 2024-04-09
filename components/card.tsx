const Card = ({ children }: { children: React.ReactNode }) => {
    const cardStyles = "bg-white rounded-lg shadow-md p-6";
    return <div className={cardStyles}>{children}</div>;
};

export default Card;
