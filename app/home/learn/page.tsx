import Learn from "@/components/Cards/learn";

const page = () => {
  return (
    <div className="bg-gradient-to-b from-white to-Yellow min-h-screen py-20">
      <h1 className="text-Black text-center text-6xl">learn</h1>
      <div className="flex flex-wrap justify-around w-full max-w-[1180px] mx-auto mt-20 gap-10 ">
        <Learn text="ADDITION" />
        <Learn text="SUBTRACTION" />
        <Learn text="MULTIPLICATION" />
        <Learn text="DIVISION" />
        <Learn text="TABLES" />
        <Learn text="SQUARE" />
        <Learn text="CUBE" />
        <Learn text="RATION & PERCENTAGE" />
      </div>
    </div>
  );
};

export default page;
