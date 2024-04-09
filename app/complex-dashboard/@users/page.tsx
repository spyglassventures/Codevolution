export default function UserAnalytics() {
    return (
        <div className="bg-white shadow-md p-4">
            <h2 className="text-lg font-bold">User Analytics</h2>
            <ul className="mt-4 space-y-2">
                <li>
                    <span className="text-gray-500">Total users: 500</span>
                </li>
                <li>
                    <span className="text-gray-500">Active users: 300</span>
                </li>
                <li>
                    <span className="text-gray-500">Inactive users: 200</span>
                </li>
            </ul>
        </div>
    );
}