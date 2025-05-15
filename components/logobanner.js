import React from 'react';
import { Box, Image, Flex, Link } from '@chakra-ui/react';
import { keyframes } from '@emotion/react'; // Import keyframes from emotion
import NextLink from 'next/link';

const logos = [
  { src: '/images/logos/SNU_merged.svg', alt: 'SNU type', width: "200px", minW: "200px", link: "https://www.snu.ac.kr" },
  { src: '/images/logos/3dv_logo.png', alt: '3DV Logo', width: "120px", minW: "120px", link: "https:/3d.snu.ac.kr" },
  { src: '/images/logos/UCSD.png', alt: 'UCSD', width: "180px", minW: "180px", link: "https://ucsd.edu/" },
  { src: '/images/logos/NAVER_green_stack.png', alt: 'NAVER Cloud', width: "100px", minW: "100px", link:"https://www.navercloudcorp.com/" },
  { src: '/images/logos/meta_cropped.svg', alt: 'Meta', width: "160px", minW: "160px", link: "https://about.meta.com/" },
  { src: '/images/logos/Reality_Labs_logo.svg', alt: 'Reality Labs', width: "65px", minW: "65px", link: "https://about.meta.com/realitylabs/" },
  { src: '/images/logos/rokaf.svg', alt: 'ROKAF', width: "100px", minW: "100px" }
];

// Define the infinite scrolling animation
const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); } /* Moves half the duplicated width */
`;

const LogoBanner = () => {
  const [isPaused, setIsPaused] = React.useState(false);

  return (
    <Box
      overflow="hidden"
      width="100%"
      py={4}
      position="relative"
      onMouseEnter={() => setIsPaused(true)} // Pause animation on hover
      onMouseLeave={() => setIsPaused(false)} // Resume animation on mouse leave
    >
      <Flex
        as="div"
        whiteSpace="nowrap"
        width="fit-content"
        alignItems="center"
        animation={`${marquee} 40s linear infinite ${isPaused ? 'paused' : 'running'}`} // Control animation state
        style={{
          transition: 'animation-play-state 0.3s ease-in-out', // Smooth transition for pause/resume
        }}
      >
        {/* Duplicate logos for seamless looping */}
        {[...logos, ...logos].map((logo, index) => (
          <Box key={index} mx={3} position="relative">
            {logo.link ? (
            <Link as={NextLink} href={logo.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                minW={logo.minW}
                objectFit="contain"
                filter="grayscale(100%)"
                transition="0.1s"
                _hover={{ filter: 'grayscale(0%)' }} // Turns color on hover
              />
            </Link>
            ): (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                minW={logo.minW}
                objectFit="contain"
                filter="grayscale(100%)"
                transition="0.1s"
                _hover={{ filter: 'grayscale(0%)' }} // Turns color on hover
              />
            )}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default LogoBanner;
