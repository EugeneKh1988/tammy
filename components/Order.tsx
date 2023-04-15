import { Button, Container, Grid, Title, rem, Text, Image } from "@mantine/core";
import React from "react";

import deliverImg from "@/public/deliver.svg";


const Layout: React.FC = () => {
  return (
    <Container size={1440} className="xl:px-[100px]">
      <Grid>
        <Grid.Col md={6}>
          <Image src={deliverImg.src} maw={400} />
        </Grid.Col>
        <Grid.Col md={6} pt={100}>
          <Button
            c="gold.0"
            bg="hazelwood.0"
            radius={6}
            fz={14}
            lh={rem(12)}
            fw={600}
            sx={(theme) => ({
              "&:hover": {
                backgroundColor: theme.colors.hazelwood[1],
                color: theme.colors.gold[2],
              },
            })}
          >
            Our Target
          </Button>
          <Title
            mt={10}
            order={1}
            fw={700}
            c="onyx.0"
            lh={rem(48)}
            fz={36}
            ff="Segoe UI, sans-serif"
            maw={565}
          >
            We Earn Your Trust and are Diligent in Your Case
          </Title>
          <Text
            fz={16}
            lh={rem(30)}
            color="darkprince.0"
            mt={40}
            mb={55}
            maw={537}
          >
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting. <br />
            <br /> It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </Text>
          <Button
            bg="cheese.0"
            radius={6}
            fz={16}
            lh={rem(12)}
            fw={500}
            h={rem(44)}
            px={20}
            sx={(theme) => ({
              "&:hover": {
                backgroundColor: theme.colors.cheese[1],
              },
            })}
          >
            Order Now
          </Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Layout;
