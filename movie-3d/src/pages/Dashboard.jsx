import { useState } from "react";
import { useEffect } from "react";
import { apiGet } from "../api/apiMethod";
import { useJwt } from "react-jwt";
import DashboardNavbar from "../component/DashBoard/DashboardNavbar";
import HeroBanner from "../component/DashBoard/HeroBanner";
import MovieRow from "../component/DashBoard/MovieRow";


export default function Dashboard() {
  const { decodedToken, isExpired } = useJwt(localStorage.getItem("token") || sessionStorage.getItem("token"));
  const [user, setUser] = useState(null);
  console.log("Decoded Token:", decodedToken);
    useEffect(() => {
    fetchUser;
  }, [decodedToken]);
   const fetchUser = async () => {
    try {
      const res = await apiGet(`users/getUserDetails/` + decodedToken.id); ;
      console.log("User Data:", res);
      setUser(res);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
   }
  return (
    <div className="bg-dark text-white min-vh-100">
      <DashboardNavbar user={user} />

      <div style={{ paddingTop: "70px" }}>
        <HeroBanner />
        <MovieRow title="Trending Now" />
        <MovieRow title="Latest Movies" />
        <MovieRow title="Popular Shows" />
      </div>
    </div>
  );
}
