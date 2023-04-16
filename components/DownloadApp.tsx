import { Container, Grid, Title, rem, Text, AspectRatio, Image, Group } from "@mantine/core";
import React from "react";

// images
import appImg from "@/public/app.png";
import googlePlayImg from "@/public/googleplay.png";
import appleStoreImg from "@/public/applestore.png";


const DownloadApp: React.FC = () => {
  return (
    <Container size={1440} className="xl:px-[100px] pt-[80px]">
      <Grid>
        <Grid.Col md={6} className="flex justify-center flex-col">
          <Title
            mt={10}
            order={1}
            fw={700}
            c="onyx.0"
            lh={rem(48)}
            fz={36}
            ff="Segoe UI, sans-serif"
            maw={418}
          >
            To Get 15% Discount Download The App
          </Title>
          <Text
            fz={16}
            lh={rem(32)}
            color="darkprince.0"
            mt={38}
            mb={55}
            maw={501}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </Text>
          <Group>
            <Image src={googlePlayImg.src} maw={140} />
            <Image src={appleStoreImg.src} maw={140} />
          </Group>
        </Grid.Col>
        <Grid.Col md={6}>
          <Image src={appImg.src} />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default DownloadApp;
