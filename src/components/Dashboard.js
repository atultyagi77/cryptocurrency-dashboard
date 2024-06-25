import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "../redux/action/action";
import { CryptoChart } from "./CryptoChart";
import { ExchangeCoins } from "./ExchangeCoins";
import { SideBar } from "./SideBar";
import { Portfolio } from "./Portfolio";
import { SearchBar } from "./SearchBar";
import { Footer } from "./Footer";
import Lottie from "lottie-react";
import { Header } from "./Header";
import * as bitcoin from "../assets/json/crypto-bitcoin.json";
import * as success from "../assets/json/success.json";

// Dashboard is the parent component
function Dashboard() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.default);
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (data.coinList.length === 0) {
      dispatch(fetchCoins());
      setLoading(true);

      const loadingTimeout = setTimeout(() => {
        setLoading(false);
        setCompleted(true);
      }, 3500); // Total time: 2500ms + 1000ms

      return () => clearTimeout(loadingTimeout);
    } else {
      setCompleted(true);
    }
  }, [data.coinList.length, dispatch]);

  return (
    <>
      {!completed ? (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="w-64 h-64">
            <Lottie animationData={loading ? success : bitcoin} />
          </div>
        </div>
      ) : (
        <>
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 flex bg-opacity-80 backdrop-blur-lg">
            <Header />
          </div>
          <div className="py-4 px-4 bg-gradient-to-r from-blue-800 to-purple-800 bg-opacity-80 backdrop-blur-lg">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-3 space-y-4">
                <SearchBar />
                <CryptoChart />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Portfolio />
                  <ExchangeCoins />
                </div>
              </div>
              <SideBar />
            </div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default Dashboard;
