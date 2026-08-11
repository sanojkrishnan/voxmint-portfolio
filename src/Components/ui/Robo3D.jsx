import { LiaLinkedinIn } from "react-icons/lia";
import gradient from "../../assets/gradient.png";
import Loader from "./Loader";
import Neumorphic from "./NeumorphicTyle";
import {
  SiInstagram,
  SiFacebook,
  SiYoutube,
  SiX,
  SiGoogle,
  SiTiktok,
} from "@icons-pack/react-simple-icons";
import { FaGithub } from "react-icons/fa6";

export default function Robo3D() {
  return (
    <div className="relative lg:w-1/2 w-full flex items-center justify-center lg:h-screen h-150 overflow-visible">
      <img
        className="absolute lg:top-0 right-0 opacity-20 "
        src={gradient}
        alt="Gradient Image"
      />

      <Neumorphic className="w-fit absolute" hover="none" rise riseDelay={800}>
        <Loader />
      </Neumorphic>
      <Neumorphic className="w-22 h-22 flex items-center justify-center absolute  right-50 " rise riseDelay={800}>
        <SiInstagram className="text-gray-400 size-8" />
      </Neumorphic>
      <Neumorphic className="w-22 h-22 flex items-center justify-center absolute top-60 " rise riseDelay={800}>
        <SiFacebook className="text-gray-400 size-8" />
      </Neumorphic>
      <Neumorphic className="w-22 h-22 flex items-center justify-center absolute bottom-60 " rise riseDelay={800}>
        <SiYoutube className="text-gray-400 size-8" />
      </Neumorphic>
      <Neumorphic className="w-22 h-22 flex items-center justify-center absolute left-50 " rise riseDelay={800}>
        <SiX className="text-gray-400 size-8" />
      </Neumorphic>
      <Neumorphic className="w-20 h-20 flex items-center justify-center absolute top-65 left-55 " rise riseDelay={800}>
        <SiTiktok className="text-gray-400 size-8" />
      </Neumorphic>
      <Neumorphic className="w-20 h-20 flex items-center justify-center absolute top-65 right-55 " rise riseDelay={800}>
        <SiGoogle className="text-gray-400 size-8" />
      </Neumorphic>
      <Neumorphic className="w-20 h-20 flex items-center justify-center absolute bottom-65 left-55 " rise riseDelay={800}>
        <LiaLinkedinIn className="text-gray-400 size-8" />
      </Neumorphic>
      <Neumorphic className="w-20 h-20 flex items-center justify-center absolute bottom-65 right-55 " rise riseDelay={800}>
        <FaGithub className="text-gray-400 size-8" />
      </Neumorphic>
    </div>
  );
}
