import { Anchor, Box, Burger, Container, Group, Header as MHeader, Menu, Text, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";

interface HeaderLinks {
  label: string;
  link: string;
};

const Header: React.FC = () => {
    const items: HeaderLinks[] = [
      {
        label: "Home",
        link: "/",
      },
      {
        label: "About us",
        link: "/about",
      },
      {
        label: "Menu",
        link: "/menu",
      },
      {
        label: "Blog",
        link: "/blog",
      },
      {
        label: "Contact us",
        link: "/contact",
      },
    ];
    const [opened, {toggle, close}] = useDisclosure(false);
    const [activeLink, setActiveLink] = useState(items && items.length > 0 ? items[0].link : '');

    const links = items.map((item) => (
      <Anchor
        href={item.link}
        key={item.link}
        fz={20}
        c={activeLink === item.link ? "cakepop.0" : "onyx.0"}
        underline={false}
        fw={700}
        px={0}
        sx={(theme) => ({
            borderBottom: activeLink === item.link ? `${rem(3)} ${theme.colors.cakepop[0]} solid` : ''
        })}
        onClick={(event) => {
            event.preventDefault();
            setActiveLink(item.link);
            close();
        }}
      >
        {item.label}
      </Anchor>
    ));

    return (
      <MHeader height={60} className="border-none">
        <Container
          size={1440}
          pt={8}
          className="flex items-center justify-between xl:px-[100px]"
        >
          <div className="flex flex-nowrap">
            <Text color="onyx.0" fz={32} lh={rem(39)} fw={700}>
              Tammy
            </Text>
            <Text color="cakepop.0" fz={32} lh={rem(39)} fw={700} ml={7}>
              Food
            </Text>
          </div>
          <Box
            sx={(theme) => ({
              [theme.fn.smallerThan(830)]: {
                display: "none",
              },
            })}
          >
            <Group spacing={60}>{links}</Group>
          </Box>
          {/* Dropdown menu */}
          <Menu shadow="md" width={200} opened={opened}>
            <Menu.Target>
              <Burger
                opened={opened}
                onClick={toggle}
                sx={(theme) => ({
                  [theme.fn.largerThan(830)]: {
                    display: "none",
                  },
                })}
              ></Burger>
            </Menu.Target>
            <Menu.Dropdown
              sx={(theme) => ({
                [theme.fn.largerThan(830)]: {
                  display: "none",
                },
              })}
            >
              {items.map((item) => (
                <Menu.Item
                  key={item.link}
                  onClick={() => {
                    setActiveLink(item.link);
                    close();
                  }}
                  sx={(theme) => ({
                    borderBottom:
                      activeLink === item.link
                        ? `${rem(3)} ${theme.colors.cakepop[0]} solid`
                        : "",
                    borderBottomLeftRadius:
                      activeLink === item.link ? 0 : theme.defaultRadius,
                    borderBottomRightRadius:
                      activeLink === item.link ? 0 : theme.defaultRadius,
                  })}
                >
                  {item.label}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Container>
      </MHeader>
    );
};

export default Header;
