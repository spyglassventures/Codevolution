export default function Authlayout({ 
    
        children,
    }: {
        children: React.ReactNode;
    }) {
        return (
          <div className="grid-flow-row-dense bg-pink-300">
            <h1>Logged in design</h1>
            {children}
          </div>
        );
    }
        