import Logo from '../assets/img/infochalten.avif'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Banner = () => {
  
  return (
    <>
    <div className='px-2'>
    <div className='w-full h-auto bg-violet-700 shadow-2xl shadow-orange-500 m-auto p-12'>
    <div className=''>
      <div className='flex items-center justify-center'>
      <div className='border border-orange-400 w-full'></div>
        <LazyLoadImage src={Logo} alt="InfoChalten logo" className='h-36 w-32'/><div className='border border-orange-400 w-full' loading="lazy"></div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Banner