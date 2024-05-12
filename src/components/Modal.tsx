import { useEffect, useRef, useState } from "react";

import { Cloudinary } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { quality } from "@cloudinary/url-gen/actions/delivery";
import { AdvancedImage, placeholder } from "@cloudinary/react";
import { GithubIcon, ExternalLinkIcon, CloseThickIcon } from "@/utils/svgs";
import Link from "next/link";
import type { Project } from "@/types/allTypes";
import Button from "./Button";

interface ModalType {
  project: Project;
  onClose: () => void;
}

export default function Modal(props: ModalType) {
  const [fadeModal, setFadeModal] = useState(false);
  const [imageHeight, setImageHeight] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const imgAspectRatio = 1.788; // 1788 / 1000
  const fadeTime = 500;
  const project = props.project;

  const handleCloseClick = () => {
    setFadeModal(true);
    document.body.style.removeProperty("overflow");
    setTimeout(() => {
      props.onClose();
    }, fadeTime + 100);
  };

  useEffect(() => {
    const updateHeight = () => {
      const viewportHeight = window.innerHeight;

      if (imageRef.current) {
        const imageWidth = imageRef.current.clientWidth;

        let newHeight = Math.floor(imageWidth / imgAspectRatio);
        const maxHeight = Math.floor(viewportHeight * 0.45);
        if (newHeight > maxHeight) newHeight = maxHeight;
        setImageHeight(newHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const publicId = project.cldPublicId;

  const cloudinary = new Cloudinary({
    cloud: { cloudName: process.env.NEXT_PUBLIC_CLOUDINARY },
  });
  const fullImage = cloudinary.image(publicId);
  fullImage.resize(scale().height(imageHeight)).delivery(quality(80));

  const fadeModalStyle = {
    animationName: "fadeOut",
    animationDuration: `${fadeTime - 200}ms`,
    animationFillMode: "both",
    animationTimingFunction: "ease-in",
    animationDelay: "0ms",
  };

  return (
    <div
      id="modal"
      className="w-screen h-screen flex justify-center items-center fixed z-40 bg-black/90 backdrop-blur-sm overscroll-none"
      style={fadeModal ? fadeModalStyle : {}}
    >
      <div
        onClick={handleCloseClick}
        onKeyDown={handleCloseClick}
        id="modalClickBg"
        className="hidden xs:block w-screen h-screen absolute inset-0"
      />
      <div
        id="modalOuter"
        className="animate-fade-scale-slide w-full h-full xs:h-[90%] xs:w-[90%] max-w-3xl bg-gray-920 xs:rounded-lg flex flex-col justify-start items-center relative border-2 border-gray-700 z-50 pb-7"
      >
        <div
          className="absolute top-[2px] sm:top-[6px] right-[4px] xs:right-[8px] sm:right-[10px] md:top-[8px] md:right-[12px] z-50"
          onClick={handleCloseClick}
          onKeyDown={handleCloseClick}
        >
          <CloseThickIcon className="inline leading-none text-lg sm:text-xl text-zinc-400 hover:text-zinc-200 active:text-sky-400" />
        </div>
        <div className="overflow-y-auto overflow-x-hidden h-full">
          <section
            id="modalTop"
            className="w-full px-6 pt-7 sm:px-8 md:px-9 md:pt-9 pb-2 flex flex-col justify-start items-center relative h-fit"
          >
            <div
              ref={imageRef}
              className="relative w-full flex justify-center items-start"
            >
              <div
                className="absolute py-[3px] px-[5px]"
                style={{ height: imageHeight, aspectRatio: imgAspectRatio }}
              >
                <div className="animate-pulse bg-gray-700 w-full h-full rounded-md md:rounded-lg" />
              </div>
              <AdvancedImage
                cldImg={fullImage}
                style={{ height: imageHeight }}
                className="border-2 border-gray-800 rounded-md md:rounded-lg z-10"
                plugins={[placeholder({ mode: "blur" })]}
              />
            </div>
          </section>
          <section
            id="modalBottom"
            className="w-full flex flex-col justify-start items-center pt-[14px] h900:pt-[22px]"
          >
            <div
              id="modalName"
              className="flex justify-center items-center text-center px-[7%] h-auto uppercase font-mono text-2xl h900:text-[1.65rem] tracking-wide15 xs:tracking-wide2 sm:tracking-wide3 text-zinc-400"
            >
              {project.name}
            </div>
            <div
              id="modalDetails"
              className="w-full flex flex-col justify-start items-start text-[0.96rem] h900:text-base text-zinc-300 pb-0 px-[9%] pt-[1.8vh] h900:[2.5vh]"
            >
              {project.url && (
                <div className="pb-[1.8vh] h900:pb-[2.5vh] self-center">
                  <Link
                    href={project.url}
                    className="text-sky-400 font-semibold hover:text-sky-500 hover:underline active:text-sky-300"
                  >
                    {project.url}
                  </Link>
                </div>
              )}

              <div className="pb-[2vh]">
                <p>{project.description}</p>
              </div>

              <div className="pb-[1.6vh]">
                <span className="mr-3 text-zinc-400 italic">Tech Stack:</span>
                <span className="text-zinc-300">{project.stack}</span>
              </div>

              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  className="text-zinc-300 font-semibold hover:underline hover:text-sky-400 active:text-sky-400"
                >
                  Github Repo
                  <GithubIcon className="ml-2 text-2xl inline mb-[3px]" />
                  <ExternalLinkIcon className="ml-2 text-sm inline mb-[1px]" />
                </Link>
              )}
            </div>
            <div className="fixed bottom-0 flex justify-center items-center h-[6vh] w-[99%] mb-1 bg-gray-920 xs:hidden">
              <Button
                type="button"
                onClick={handleCloseClick}
                onKeyDown={handleCloseClick}
                className="py-[1px] w-[120px] text-xs tracking-wide1"
              >
                Close
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
