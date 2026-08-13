import { LiaLinkedinIn } from "react-icons/lia";
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
    <div className="relative lg:w-1/2 w-full flex items-center justify-center md:h-[90.5vh] h-150 overflow-visible">
      <div className="grid grid-cols-1 place-items-center-safe gap-10">
        <p className="text-white text-xl">Reach Us Here </p>

        <div className="grid w-fit h-fit grid-cols-3 place-items-center gap-4">
          <Neumorphic
            className=" bg-transparent cursor-pointer lg:w-20 lg:h-20 w-15 h-15 flex items-center justify-center"
            rise
            riseDelay={800}
          >
            <SiGoogle className="text-gray-400 size-8" />
          </Neumorphic>
          <Neumorphic
            className=" bg-transparent cursor-pointer lg:w-22 lg:h-22 w-17 h-17 flex items-center justify-center  "
            rise
            riseDelay={800}
          >
            <SiInstagram className="text-gray-400 size-8" />
          </Neumorphic>

          <Neumorphic
            className="lg:w-20 lg:h-20 w-15 h-15 bg-transparent cursor-pointer flex items-center justify-center"
            rise
            riseDelay={800}
          >
            <LiaLinkedinIn className="text-gray-400 size-8" />
          </Neumorphic>

          <Neumorphic
            className="bg-transparent cursor-pointer lg:w-22 lg:h-22 w-17 h-17 flex items-center justify-center "
            rise
            riseDelay={800}
          >
            <SiYoutube className="text-gray-400 size-8" />
          </Neumorphic>

          <div
            className="w-fit p-4 bg-transparent"
            active="none"
            rise
            riseDelay={800}
          >
            <Loader />
          </div>
          <Neumorphic
            className="bg-transparent cursor-pointer lg:w-22 lg:h-22 w-17 h-17 flex items-center justify-center  "
            rise
            riseDelay={800}
          >
            <SiX className="text-gray-400 size-8" />
          </Neumorphic>
          <Neumorphic
            className="bg-transparent cursor-pointer lg:w-20 lg:h-20 w-15 h-15 flex items-center justify-center"
            rise
            riseDelay={800}
          >
            <SiTiktok className="text-gray-400 size-8" />
          </Neumorphic>

          <Neumorphic
            className="bg-transparent cursor-pointer lg:w-22 lg:h-22 w-17 h-17 flex items-center justify-center  "
            rise
            riseDelay={800}
          >
            <SiFacebook className="text-gray-400 size-8" />
          </Neumorphic>
          <Neumorphic
            className="bg-transparent cursor-pointer lg:w-20 lg:h-20 w-15 h-15 flex items-center justify-center"
            rise
            riseDelay={800}
          >
            <FaGithub className="text-gray-400 size-8" />
          </Neumorphic>
        </div>
      </div>
    </div>
  );
}
