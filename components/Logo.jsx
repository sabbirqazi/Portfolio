import Link from "next/link";

import { FaConnectdevelop } from "react-icons/fa";

const Logo = () => {
  return (
    <div className=" text-lg border-[2px] border-[#9be15d] rounded-[30px]">
      <Link
        href="/"
        className=" font-bold flex item-center justify-center gap-x-1 text-[#9be15d] p-2"
      >
        <FaConnectdevelop size={28} strokeWidth={2} />
        <span>Sabbir</span>
      </Link>
    </div>
  );
};

export default Logo;
