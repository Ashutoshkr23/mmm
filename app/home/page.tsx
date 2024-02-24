import ChooseMode from "@/components/Cards/chooseMode";

const page = () => {
  return (
    <div className="bg-gradient-to-b from-white to-light-blue min-h-screen pt-20 ">
      <h1 className="text-[#333] text-6xl text-center font-bold ">
        Choose Mode
      </h1>
      <div className="flex items-center mt-20 justify-around max-w-[1180px] mx-auto">
        <ChooseMode
          href="/learn"
          customCSS=" bg-light-blue"
          text="Learn"
          cardCSS=" from-white to-Yellow  border-Yellow "
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
        />
        <ChooseMode
          href="/practice"
          customCSS=" bg-light-blue"
          text="Practice"
          cardCSS=" from-white to-Dark-blue  border-Dark-blue "
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
        />
        <ChooseMode
          href="/play"
          customCSS=" bg-orange-light border-2 border-orange"
          text="Play"
          cardCSS=" from-white to-orange  border-orange "
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
        />
      </div>
    </div>
  );
};

export default page;
