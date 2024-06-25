import { Poppins } from "next/font/google";
import  Header from "./Header";
import Scrollscreen  from "./Scrollscreen"
import { NextFont } from "next/dist/compiled/@next/font";



const poppins: NextFont = Poppins({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

const LandingPage = () => {
  return (
    <div className={poppins.className}>
         <div>
        <Header />
        <div className="mt-20" />
        <div>LandingPage</div>

        <Scrollscreen />
      </div>
    </div>

  );
};

export default LandingPage;