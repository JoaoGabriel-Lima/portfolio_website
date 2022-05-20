import { forwardRef } from "react";
import { RiLoader2Line } from "react-icons/ri";

type Props = { children: React.ReactNode };

export const RoomSpinner = () => (
  <div className="absolute">
    <RiLoader2Line className="dark:text-white/[80] text-4xl animate-spin" />
  </div>
);

export const RoomContainer = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <div
    className="flex justify-center items-center m-auto mt-[-120px] mb-[-200px] md:w-[640px] md:h-[640px] sm:w-[480px] sm:h-[480px] w-[280px] h-[280px] relative "
    ref={ref}
  >
    {props.children}
  </div>
));

const Loader = () => {
  return (
    <RoomContainer>
      <RoomSpinner />
    </RoomContainer>
  );
};

export default Loader;
