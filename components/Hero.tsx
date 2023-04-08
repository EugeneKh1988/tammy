import { Button, Container, Grid, Title, rem, Text, Group } from "@mantine/core";
import React from "react";

const Hero: React.FC = () => {
  return (
    <Container size={1440} mt={80} className="xl:px-[100px]">
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
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
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
          </Group>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Hero;
