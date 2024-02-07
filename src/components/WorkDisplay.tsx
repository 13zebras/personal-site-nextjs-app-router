'use client'

// import Image from "next/image";
import { WorkData } from "./WorkExperience";

export default function WorkDisplay(props: WorkData) {
  return (
    // w-[300px] sm:w-[500px] md:w-[600px] lg:w-[750px] xl:w-[900px]
    // <div className=" min-h-[30vh] max-h-[50vh] w-[70vw] xs:w-[60vw] sm:w-[60vw] md:w-[50vw] lg:w-[45%] px-4 sm:px-4 py-8 rounded-lg flex flex-col justify-start items-center flex-shrink-0 snap-center bg-zinc-910 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden">
    <div className="w-[40%] p-8 rounded-xl flex flex-col justify-center items-start flex-shrink-0 bg-zinc-900 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden">
      {/* <div className="w-28 h-28 xl:w-[200px] xl:h-[200px] rounded-full relative display:block">
        <Image
          src="https://picsum.photos/300/300" //__
          width={300}
          height={300}
          alt="Tom Stine"
          style={{objectFit: "cover"}}
          className="rounded-full"
        />
      </div> */}
      {/* <div className="flex flex-col justify-center items-start px-0 md:px-5 gap-y-2 w-full"> */}
      <h4 className="text-2xl font-light">{props.title}</h4>
      <p className="text-xl font-bold mt-1">{props.employer}</p>
      {/* <div className="flex space-x-2 my-2">O O O O</div> */}
      <p className="text-base uppercase py-2 text-gray-400">{props.dates}</p>
      <ul className="list-disc space-y-2 ml-5 text-lg w-[90%]">
        <li>{props.stack}</li>
        <li>{props.summary1}</li>
        <li>{props.summary2}</li>
        <li>{props.summary3}</li>
      </ul>
    </div>
    // </div>
  );
}

//<img src="https://picsum.photos/id/24/600/400" alt="lorem picsum image" />;
