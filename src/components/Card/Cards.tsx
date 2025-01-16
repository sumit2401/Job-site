import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export interface ICard {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
  key?: number;
}

export function Cards(props: ICard) {
  const { text, imageSrc, name, username, key } = props;

  return (
    <div
      className="w-full max-w-xs rounded-3xl border border-[#F1F1F1] bg-white p-10 shadow-[0_7px_14px_#EAEAEA]"
      key={key}
    >
      <div>{text}</div>
      <div className="flex items-center gap-2 mt-5">
        <Image src={imageSrc} alt={name} width={40} height={40} />
        <div className="flex flex-col">
          <div className="font-medium tracking-tight leading-5">{name}</div>
          <div className="leading-5 tracking-tight">{username}</div>
        </div>
      </div>
    </div>
  );
}
