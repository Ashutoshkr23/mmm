import Image from "next/image";
import Button from "../ui/Button";

interface ModeProps {
  href: string;
  customCSS: string;
  text: string;
  cardCSS: string;
  cardText: string;
}

const ChooseMode = ({
  href,
  customCSS,
  text,
  cardCSS,
  cardText,
}: ModeProps) => {
  return (
    <div className={`${cardCSS} bg-gradient-to-b  border rounded-xl h-[450px] w-[300px]  p-[30px]`}>
      <div className=" h-[240px] w-[240px] rounded-lg relative drop-shadow-md">
        <Image
          src={`/assets/choose-mode/${text}/img.jpg`}
          alt={text}
          height={240}
          width={240}
          className="rounded-2xl"
        />
        <div className="absolute bottom-4 inset-x-0 ">
          <Button
            href={href}
            customCSS={customCSS}
            text={text}
          />
        </div>
      </div>
      <p className="text-Black mt-4">
       {cardText}
      </p>
    </div>
  );
};

export default ChooseMode;
