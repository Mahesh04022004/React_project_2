import { Box, Container,Stack,Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../assests/1.jpg'
import img2 from '../assests/2.jpg'
import img3 from '../assests/3 (1).jpg'
import img4 from '../assests/4 (1).jpg'
import img5 from '../assests/5.png'
import { Image,Heading } from '@chakra-ui/react'
import { transform } from 'framer-motion'
const headingOption = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p:"4",
    size:"2xl"



}
const Home = () => {
  return <Box>
    
    <MyCarousel/>
    <Container minH={"100vh"} maxW={'container.xl'} p="16">
            <Heading textTransform={'uppercase'} py="2" w={'fit-content'} borderBottom={"2px solid"}
            m='auto'>Services</Heading>

            <Stack
                h='full'
                p={'4'}
                alignItems={'center'}
                direction={['column','row']}
            >
                <Image src={img5} filter={"hue-rotate(-130deg)"} h={["40","350"]}/>
                <Text
                    letterSpacing={"widest"}
                    lineHeight={'190%'}
                    p={["4","16"]}
                    textAlign={'center'}
                >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
            modi soluta ullam voluptatum unde repellat in molestias quod?
            Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
            velit culpa maiores. Inventore esse illum excepturi dolores est
            natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
            adipisci minima hic, nam provident quo aperiam quasi vel?
            Dignissimos accusantium aliquid aut vel explicabo voluptatum
            molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
            omnis officiis autem dolorum!
                </Text>

            </Stack>
    </Container>

  </Box>
}

const MyCarousel =()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>

        <Box w='full' h={'100vh'}>
            <Image src={img1}/>
            <Heading bg={"blackAlpha.600"} color={"white"} {...headingOption}>Watch the Future</Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Image src={img2}/>
            <Heading bg={"blackAlpha.600"} color={"white"} {...headingOption}>Future is Gaming</Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Image src={img3}/>
            <Heading bg={"whiteAlpha.600"} color={"black"} {...headingOption}>Gaming on Console</Heading>
        </Box>
        <Box w='full' h={'100vh'}>
            <Image src={img4}/>
            <Heading bg={"whiteAlpha.600"} color={"black"} {...headingOption}>Night Life is cool</Heading>
        </Box>


    </Carousel>
)

export default Home
