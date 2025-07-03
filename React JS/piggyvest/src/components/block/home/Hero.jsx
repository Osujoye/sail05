import heroImage from "../../../assets/heroimg.png";
import Button from "../../reuseable/Button";
import { LuNotebook } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Hero = () => {
  return (
    <div className=" min-h-[85vh]  ">
      <div className=" max-w-[1280px] h-full px-16 mx-auto flex justify-between  items-center pt-[120px] max-tablet:flex-col">
        <section className=" max-w-[450px] max-tablet:flex max-tablet:flex-col max-tablet:items-center max-tablet:text-center max-tablet:max-w-[600px] max-tablet:mb-6 ">
          <main className=" flex w-[350px] h-11 bg-blue-400 text-white items-center justify-center rounded-full font-semibold mb-6  ">
            <LuNotebook />
            <span>The 2024 PiggyVest Savings Report</span>
            <MdKeyboardArrowRight />
          </main>
          <h1 className=" font-bold text-[42px] leading-12 mb-6">
            The Better Way to Save & Invest
          </h1>
          <p className=" text-lg mb-5">
            Piggyvest helps over 5 million customers achieve their financial
            goals by helping them save and invest with ease.
          </p>
          <main className=" flex gap-3">
            <Button
              title="Get on iPhone"
              bgColor="#122231"
              textColor="#fff"
              iconTitle={<FaApple />}
            />
            <Button
              title="Get on Android"
              bgColor="#122231"
              textColor="#fff"
              iconTitle={<FaGooglePlay />}
            />
          </main>
        </section>
        <section className=" max-w-[600px]">
          <img className=" w-full" src={heroImage} alt="" />
        </section>
      </div>
    </div>
  );
};

export default Hero;
