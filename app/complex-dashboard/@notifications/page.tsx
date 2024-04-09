import Card from '@/components/card';
import Link from 'next/link';

export default function Notifications() {
    return (
        <Card>
        <div className="bg-white shadow-md p-4">
            <h2 className="text-lg font-bold">Notifications</h2>
            <Link className="text-orange-500 font-lg" href="complex-dashboard/archived">Go to archived</Link>
            <ul className="mt-4 space-y-2">
                <li>
                    <span className="text-gray-500">You have 3 new messages</span>
                </li>
                <li>
                    <span className="text-gray-500">You have 1 new friend request</span>
                </li>
                <li>
                    <span className="text-gray-500">You have 2 new followers</span>
                </li>
            </ul>
        </div>
        </Card>
    )
}

