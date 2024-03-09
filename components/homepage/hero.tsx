import Image from "next/image";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white to-light-blue  w-full h-full">
      <div className="flex flex-col-reverse md:flex-row items-center text-black justify-around min-h-screen  mx-auto max-w-[1180px]">
        <div className="md:w-1/2 flex flex-col gap-6 px-10">
          <h1 className="text-3xl mt-10 md:mt-0 lg:text-6xl font-bold">
            Unlock Your Mental Math Potential
          </h1>
          <p className="text-lg lg:text-2xl ">
            Unleash your Mental Math mastery with Math Mastermind! Whether you&apos;re
            boosting calculation speed, refining number sense, or sharpening
            problem-solving skills, our platform offers tailored resources and
            games. Join us on your journey to mental math mastery today
          </p>
          <Button
            href="/home"
            customCSS="h-10 bg-orange px-10 w-40 py-2 rounded-2xl"
            text="Try it now"
          />
        </div>
        <div className="lg:hidden">
          <Image
            src="/assets/landing-page/hero.png"
            alt="hero-image"
            height={275}
            width={312}
          />
        </div>
        <div className="hidden lg:block">
          <Image
            src="/assets/landing-page/hero.png"
            alt="hero-image"
            height={441}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
