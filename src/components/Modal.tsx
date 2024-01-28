import { AdvancedImage, placeholder, responsive } from '@cloudinary/react';
import { fill, fit } from "@cloudinary/url-gen/actions/resize";

import { Cloudinary } from "@cloudinary/url-gen";
import { compass } from "@cloudinary/url-gen/qualifiers/gravity";

type ModalType = {
  description?: string;
  image: string;
  onClose: () => void;
}

export default function Modal(props: ModalType) {
  console.log('>>> modal props', props)
  const handleCloseClick = () => {
    // console.log('Openclicked')
    props.onClose()
    document.body.style.removeProperty('overflow');
  }

  const cld = new Cloudinary({ cloud: { cloudName: 'do82ekomg' } });
  const fullImage = cld.image(props.image)
  fullImage.resize(
    fit()
      .width(850)
      .height(610)
    // .gravity(compass('north'))
  )

  return (

    <div onClick={handleCloseClick} className="w-[100vw] h-[100vh] fixed top-0 left-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center overscroll-none" >
      <div className="w-[90%] h-[90%] p-16 bg-zinc-900 rounded-xl overscroll-none flex flex-col justify-center items-center gap-y-12">
        <div className="w-[100%] min-h-[40%] max-h-[60%] border border-red-700 flex justify-center items-start">
          <AdvancedImage cldImg={fullImage} plugins={[responsive({ steps: 200 }), placeholder({ mode: 'predominant-color' })]} />
        </div>
        <div className="px-8 text-xl">{props.description}</div>
        <button className="w-56 h-12 bg-red-950 text-white text-lg rounded-2xl" onClick={handleCloseClick}>Close</button>
      </div>
    </div>
  );
}
