"use client"


// this is called destructuring
// it works like this:
// const error = { message: "error message" }
// const { message } = error
// console.log(message) // "error message"
export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void; }) {
    return (
        <div style={{ padding: '20px', backgroundColor: '#fdd', border: '1px solid #f99', borderRadius: '5px', color: '#333', textAlign: 'center' }}>
            <p style={{ fontWeight: 'bold', fontSize: '16px' }}>{error.message}</p>
            <button onClick={reset} style={{ padding: '10px 15px', fontSize: '14px', color: '#fff', backgroundColor: '#c00', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
                Try again
            </button>
        </div>
    );
}

    