import Image from "next/image";
import Navy from "../../public/navy.png";

import Header from "./components/Header";
import SiteNumber from "./components/SiteNumber";
import Text from "./components/Text";
import Colors from "./components/Colors";
import Watches from "./components/Watches";
import BuyNow from "./components/BuyNow";

export default function Home() {
  return (
    <div className="grid-container">
      <Header />
      <Text />
      <BuyNow />
      <Watches />
      <SiteNumber />
      <Colors />
    </div>
  );
}
