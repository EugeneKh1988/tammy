import { Box, Container, Grid, Text, Title, rem } from "@mantine/core";
import Image from "next/image";
import React from "react";

// images
import listImg from "@/public/list.svg";
import carImg from "@/public/car.svg";
import dollarImg from "@/public/dollar.svg";
import lineImg from "@/public/line.svg";
import lineDownImg from "@/public/line1.svg";


const HowWorks: React.FC = () => {
  return (
    <Container size={1440} mt={96} className="xl:px-[100px]">
      <Title
        order={1}
        ff="Segoe UI, sans-serif"
        fz={36}
        lh={rem(48)}
        c="onyx.0"
        ta="center"
        fw={700}
      >
        How it works
      </Title>
      <Text
        c="darkprince.0"
        fz={14}
        lh={rem(27)}
        maw={505}
        ta="center"
        mt={30}
        mx="auto"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry
      </Text>
      <Grid mt={86} className="relative">
        <Box
          className="absolute h-[120px] justify-evenly items-center w-full flex-shrink hidden lg:flex"
        >
          <Image src={lineImg} alt="" className="pl-10" />
          <Image src={lineDownImg} alt="" className="pr-10" />
        </Box>
        <Grid.Col md={4} className="flex flex-col items-center">
          <div className="w-[88px] h-[88px] rounded-full flex justify-center items-center bg-[#335DFF]">
            <Image
              src={listImg}
              alt="list image"
              className="text-white max-w-[42px]"
            />
          </div>
          <Title
            order={5}
            fz={20}
            lh={rem(32)}
            c="onyx.0"
            ta="center"
            fw={600}
            mt={39}
          >
            Order Now
          </Title>
          <Text
            c="darkprince.0"
            fz={14}
            lh={rem(27)}
            maw={325}
            ta="center"
            mt={20}
            mx="auto"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry
          </Text>
        </Grid.Col>
        <Grid.Col mt={44} md={4} className="flex flex-col items-center">
          <div className="w-[88px] h-[88px] rounded-full flex justify-center items-center bg-[#F6CA00]">
            <Image
              src={carImg}
              alt="list image"
              className="text-white max-w-[42px]"
            />
          </div>
          <Title
            order={5}
            fz={20}
            lh={rem(32)}
            c="onyx.0"
            ta="center"
            fw={600}
            mt={39}
          >
            Get Delivery
          </Title>
          <Text
            c="darkprince.0"
            fz={14}
            lh={rem(27)}
            maw={325}
            ta="center"
            mt={20}
            mx="auto"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry
          </Text>
        </Grid.Col>
        <Grid.Col md={4} className="flex flex-col items-center">
          <div className="w-[88px] h-[88px] rounded-full flex justify-center items-center bg-[#0BD28E]">
            <Image
              src={dollarImg}
              alt="list image"
              className="text-white max-w-[42px]"
            />
          </div>
          <Title
            order={5}
            fz={20}
            lh={rem(32)}
            c="onyx.0"
            ta="center"
            fw={600}
            mt={39}
          >
            Payment
          </Title>
          <Text
            c="darkprince.0"
            fz={14}
            lh={rem(27)}
            maw={325}
            ta="center"
            mt={20}
            mx="auto"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry
          </Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default HowWorks;
