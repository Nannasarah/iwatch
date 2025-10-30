import Image from "next/image";
import Navy from "../../../public/navy.png";
import Mint from "../../../public/mint.png";
import Ocean from "../../../public/ocean.png";

const Watches = () => {
  return (
    <div className="watches">
      <div className="boks nb">
        <Image className="watch" src={Navy} alt="billede" width={100} height={100} />
      </div>
      <div className="boks mb">
        <Image className="watch" src={Mint} alt="billede" width={100} height={100} />
      </div>
      <div className="boks ob">
        <Image className="watch" src={Ocean} alt="billede" width={100} height={100} />
      </div>
    </div>
  );
};

export default Watches;
