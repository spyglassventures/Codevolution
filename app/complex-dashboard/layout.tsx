//import UserAnalytics from "@components/UserAnalytics";
//import RevenueMetrics from "@components/RevenueMetrics";
//import Notifications from "@components/Notifications";

export default function DashboardLayout({ 
    children, 
    users,
    revenue,
    notifications, 
    login,
}: { 
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
}) {
  /* handle login */
  const isLoggedIn = false;

  return isLoggedIn ? ( 
    /* with this code you tell how the content is rendered positionally  */
    <div>
        <div>{children}</div>  {/* complex-dashboard/@childen/page.tsx  */}
        <div style={{ display: "flex"}}>
            <div style={{ display: "flex", flexDirection: "column"}}>
              <div>{users}</div>
              <div>{revenue}</div>
            </div>  
          
    <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
    </div>
    </div>
  ) : (
    <div>{login}</div>
    );
}

