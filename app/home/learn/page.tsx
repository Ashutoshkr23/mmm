import Learn from "@/components/Cards/learn";

const page = () => {
  return (
    <div>
      <h1 className="text-Black text-center font-bold text-4xl lg:text-6xl">learn</h1>
      <div className="flex flex-wrap justify-around w-full  mx-auto mt-20 gap-10 ">
        <Learn link="addition" text="ADDITION" />
        <Learn link="subtraction" text="SUBTRACTION" />
        <Learn link="multiplication" text="MULTIPLICATION" />
        <Learn link="division" text="DIVISION" />
        <Learn link="tables" text="TABLES" />
        <Learn link="square" text="SQUARE" />
        <Learn link="cube" text="CUBE" />
        <Learn link="ratio" text="RATION & PERCENTAGE" />
      </div>
    </div>
  );
};

export default page;
