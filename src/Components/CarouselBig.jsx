import React from 'react'
import { Container as Box } from '@chakra-ui/react'
import ImageSlider from './ImageSlider'



const CarouselBig = () => {
    const slides = [
        { url: "https://images-static.nykaa.com/uploads/10f9cd94-b639-4490-8982-0ea54ffba38e.gif?tr=w-2400,cm-pad_resize", title: "beach" },
        { url: "https://images-static.nykaa.com/uploads/e9480ffd-3054-4d3d-be22-a49f5c62d8b1.GIF?tr=w-2400,cm-pad_resize", title: "boat" },
        { url: "https://images-static.nykaa.com/uploads/d0c85404-6362-4c67-a8d6-f538f22750b5.gif?tr=w-2400,cm-pad_resize", title: "forest" },
        { url: "https://images-static.nykaa.com/uploads/a5275889-7953-4f1d-a17c-f4c9299719c3.gif?tr=w-2400,cm-pad_resize", title: "city" },
        { url: "https://images-static.nykaa.com/uploads/664ec059-c75c-4d69-97f6-beaad36227b5.gif?tr=w-2400,cm-pad_resize", title: "italy1" },
        { url: "https://images-static.nykaa.com/uploads/e5439e41-56c9-48d0-ac36-d155d4077f13.gif?tr=w-2400,cm-pad_resize", title: "italy2" },
        { url: "https://images-static.nykaa.com/uploads/c95c8d0e-691e-4b12-a778-06c541c5f1d1.jpg?tr=w-2400,cm-pad_resize", title: "italy" },
      ];
      const containerStyles = {
        width: "100%",
        height: "100%",
        margin: "0 auto",
      };
  return (
   <Box bg={'rgb(243,243,243)'} maxW={"100%"} h={"400px"}>

      
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    
   </Box>
  )
}




export default CarouselBig