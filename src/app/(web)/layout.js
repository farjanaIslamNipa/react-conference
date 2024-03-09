import Navbar from "@/components/shared/Navbar";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
