export default function RevenueMetrics() {
    return (
        <div className="bg-white shadow-md p-4">
            <h2 className="text-lg font-bold">Revenue Metrics</h2>
            <ul className="mt-4 space-y-2">
                <li>
                    <span className="text-gray-500">Total revenue: $5,000</span>
                </li>
                <li>
                    <span className="text-gray-500">Total expenses: $2,000</span>
                </li>
                <li>
                    <span className="text-gray-500">Net profit: $3,000</span>
                </li>
            </ul>
        </div>
    );
}