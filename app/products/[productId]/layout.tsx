export default function ProductDetailsLayout({ 
    children,
}: {
    children: React.ReactNode;
}) {
    return (
      <div className="grid-flow-row-dense bg-yellow-300">
        <h1>Featured Product Details</h1>
        {children}
      </div>
    );
}
    