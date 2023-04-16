import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Grid, Title, rem, Text, Group, Image } from "@mantine/core";
import React from "react";

// images
import back from "@/public/background.png";
import center from "@/public/center.png";
import leftBottom from "@/public/leftBottom.svg";
import leftTop from "@/public/leftTop.svg";
import arrow from "@/public/arrow.svg";

const Hero: React.FC = () => {
  return (
    <Container size={1440} mt={80} className="xl:pl-[100px] pb-[180px]">
      <Grid>
        <Grid.Col md={6}>
          <Button
            c="gold.0"
            bg="hazelwood.0"
            radius={7.125}
            fz={16.125}
            lh={rem(14)}
            fw={600}
            sx={(theme) => ({
              "&:hover": {
                backgroundColor: theme.colors.hazelwood[1],
                color: theme.colors.gold[2],
              },
            })}
          >
            Fast Delivery
          </Button>
          <Title
            order={1}
            fw={700}
            c="onyx.0"
            lh={rem(64)}
            fz={48}
            ff="Segoe UI"
          >
            Discover Your Favourite Food and
            <Text span pl={5} c="cheese.0">
              Test Forever
            </Text>
          </Title>
          <Text c="darkprince.0" fz={16} lh={rem(32)} maw={500} mt={10}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </Text>
          <Group spacing={10} mt={60}>
            <Button
              bg="cheese.0"
              radius={48}
              fz={19}
              lh={rem(23)}
              fw={500}
              h={rem(52)}
              px={20}
              sx={(theme) => ({
                "&:hover": {
                  backgroundColor: theme.colors.cheese[1],
                },
              })}
            >
              Get Started
            </Button>
            <Button
              variant="subtle"
              c="onyx.0"
              radius={8}
              fz={17}
              lh={rem(32)}
              fw={500}
              h={rem(52)}
              px={20}
              sx={(theme) => ({
                "&:hover": {
                  color: theme.colors.onyx[1],
                },
              })}
              leftIcon={
                <div className="flex justify-between items-center p-2 bg-white rounded-full">
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    color="#FFC130"
                    className="text-[24px]"
                  />
                </div>
              }
            >
              More Information
            </Button>
          </Group>
        </Grid.Col>
        <Grid.Col md={6} className="relative flex justify-center items-center">
          <Image src={back.src} maw={600} className="absolute right-0 z-[5]" />
          <Image src={center.src} maw={400} className="shrink z-[7]" />
          <Image
            src={leftTop.src}
            maw={200}
            className="absolute top-0 left-0 z-[6]"
          />
          <Image
            src={leftBottom.src}
            maw={200}
            className="absolute bottom-0 left-0 z-[6]"
          />
          <Image
            src={arrow.src}
            maw={200}
            className="absolute bottom-1/3 -left-10 z-[4]"
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Hero;
