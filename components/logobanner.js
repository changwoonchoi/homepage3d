import React from 'react';
import { Box, Image, Flex, Link } from '@chakra-ui/react';
import { keyframes } from '@emotion/react'; // Import keyframes from emotion
import NextLink from 'next/link';

const logos = [
  { src: '/images/logos/SNU_merged.svg', alt: 'SNU type', width: "250px", minW: "250px", link: "https://www.snu.ac.kr" },
  { src: '/images/logos/3dv_logo.png', alt: '3DV Logo', width: "150px", minW: "150px", link: "https://www.3d.snu.ac.kr" },
  { src: '/images/logos/UCSD.png', alt: 'UCSD', width: "220px", minW: "220px", link: "https://ucsd.edu/" },
  { src: '/images/logos/NAVER_green_stack.png', alt: 'NAVER Cloud', width: "120px", minW: "120px", link:"https://www.navercloudcorp.com/" },
  { src: '/images/logos/meta_cropped.svg', alt: 'Meta', width: "200px", minW: "200px", link: "https://about.meta.com/" },
  { src: '/images/logos/Reality_Labs_logo.svg', alt: 'Reality Labs', width: "80px", minW: "80px", link: "https://about.meta.com/realitylabs/" },
  { src: '/images/logos/rokaf.svg', alt: 'ROKAF', width: "120px", minW: "120px" }
];

// Define the infinite scrolling animation
const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); } /* Moves half the duplicated width */
`;

const LogoBanner = () => {
  return (
    <Box overflow="hidden" width="100%" py={4} position="relative">
      <Flex
        as="div"
        whiteSpace="nowrap"
        width="fit-content"
        alignItems="center"
        // justify-content="center"
        // align-items="center"
        animation={`${marquee} 40s linear infinite`} // Adjust speed here
      >
        {/* Duplicate logos for seamless looping */}
        {[...logos, ...logos].map((logo, index) => (
          <Box key={index} mx={2} position="relative">
            {logo.link ? (
            <Link as={NextLink} href={logo.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                minW={logo.minW}
                objectFit="contain"
                filter="grayscale(100%)"
                transition="0.3s"
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
                transition="0.3s"
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
