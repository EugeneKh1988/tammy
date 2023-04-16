import { faFacebook, faFacebookF, faInstagram, faTelegram, faTelegramPlane, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Grid, Text, rem, Title, Box, TextInput, ActionIcon, Group, Anchor, Divider } from "@mantine/core";
import React from "react";


const Footer: React.FC = () => {
  return (
    <Container size={1440} className="xl:px-[100px] pt-[243px] ">
      <Grid sx={{ borderBottom: `${rem(1)} solid #fff` }} pb={10}>
        <Grid.Col md={4}>
          <Text color="white" fz={25} fw={700} lh={rem(31)}>
            Tammy
            <Text span pl={5} color="cakepop.0">
              Food
            </Text>
          </Text>
          <Text mt={16} fz={14} lh={rem(25)} color="white" maw={331}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </Text>
          <Group mt={15} spacing={20} className="divider-x">
            <Anchor href="https://www.facebook.com">
              <FontAwesomeIcon
                icon={faFacebookF}
                color="#fff"
                className="hover:text-[#FEB918] w-[24px]"
              />
            </Anchor>
            <Divider orientation="vertical" />
            <Anchor href="https://www.instagram.com">
              <FontAwesomeIcon
                icon={faInstagram}
                color="#fff"
                className="hover:text-[#FEB918] w-[24px]"
              />
            </Anchor>
            <Divider orientation="vertical" />
            <Anchor href="https://www.twitter.com">
              <FontAwesomeIcon
                icon={faTwitter}
                color="#fff"
                className="hover:text-[#FEB918] w-[24px]"
              />
            </Anchor>
            <Divider orientation="vertical" />
            <Anchor href="https://www.youtube.com">
              <FontAwesomeIcon
                icon={faYoutube}
                color="#fff"
                className="hover:text-[#FEB918] w-[24px]"
              />
            </Anchor>
          </Group>
        </Grid.Col>
        <Grid.Col md={4}>
          <Title
            order={3}
            tt="uppercase"
            color="white"
            ff="Segoe UI, sans-serif"
            fz={25}
            lh={rem(38)}
            fw={700}
          >
            quick link
          </Title>
          <Box
            color="white"
            ff="Segoe UI, sans-serif"
            fz={16}
            lh={rem(24)}
            fw={700}
          >
            <ul className="list-none text-white space-y-2 p-0">
              <li>About Us</li>
              <li>Menu</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </Box>
        </Grid.Col>
        <Grid.Col md={4}>
          <Title
            order={3}
            tt="uppercase"
            color="white"
            ff="Segoe UI, sans-serif"
            fz={25}
            lh={rem(38)}
            fw={700}
          >
            news letter
          </Title>
          <Text color="white" fz={16} lh={rem(24)} mt={11}>
            Subscribe our newsletter to get our latest update & news
          </Text>
          <TextInput
            mt={33}
            placeholder="Your email address"
            radius={4}
            rightSection={
              <ActionIcon variant="filled" color="gold.0">
                <FontAwesomeIcon icon={faTelegramPlane} />
              </ActionIcon>
            }
            maw={369}
            h={50}
            lh={rem(16)}
          />
        </Grid.Col>
      </Grid>
      <Text mt={20} color="white" ta="center">
        <FontAwesomeIcon icon={faCopyright} className="mr-1" />
        Copyright 2021. Tammy Food. All Right Reserved.
      </Text>
    </Container>
  );
};

export default Footer;
