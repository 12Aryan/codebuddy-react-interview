import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="min-h-[100dvh] bg-gradient-to-tr from-[#FBAB7E] to-[#F7CE68] py-7 text-black">
      <div className="container mx-auto   border-[1px solid red]  border-red-600" >
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
