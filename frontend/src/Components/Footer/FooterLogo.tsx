import { Image, Text } from '@chakra-ui/react';
import LogoIMG from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
export const Logo = (props: any) => {
  const navigate = useNavigate()
  return (
    <div className='flex felx-row items-center gap-3' onClick={() => navigate('/')}>
      
     {/* <image href={logoSVG} height="32" width="32" className=' bg-transparent filter-invert'/>  */}
     <Image
        src={LogoIMG}
        boxSize={"40px"}
        objectFit={"contain"}
        cursor={"pointer"}
        filter={"invert(100%)"}
      />
      <Text className='cursor-pointer'>GTAA</Text>
    </div>
  );
};
