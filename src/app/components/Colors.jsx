import { TbLineDotted } from "react-icons/tb";

const Colors = () => {
  return (
    <div className="colors">
      <div className="color nb"></div>
      <TbLineDotted color="white" size={20} style={{ transform: "rotate(90deg)" }} />
      <div className="color mb"></div>
      <TbLineDotted color="white" size={20} style={{ transform: "rotate(90deg)" }} />
      <div className="color ob"></div>
    </div>
  );
};

export default Colors;
