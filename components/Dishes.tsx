import { IDish } from "@/libs/mockdishes";
import { Container, Title, Text, rem, Grid, Pagination } from "@mantine/core";
import React, { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import Dish from "./Dish";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


const Dishes: React.FC = () => {
  const [page, setPage] = useState(1);
  const [exDishes, setDishes] = useState<IDish[]>([]);
  const fetcher = (args: string) => fetch(args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `/api/dishes?page=${page}`,
    fetcher
  );
  

  useEffect(() => {
    if (data && !isLoading && data.dishes) {
      setDishes(data.dishes);
    } 
  }, [data, isLoading]);

  return (
    <Container size={1440} mt={44} className="xl:px-[100px]">
      <Title
        order={1}
        ff="Segoe UI, sans-serif"
        fz={36}
        lh={rem(48)}
        c="onyx.0"
        ta="center"
        fw={700}
      >
        Our Delicious Dish
      </Title>
      <Text
        c="darkprince.0"
        fz={14}
        lh={rem(27)}
        maw={465}
        ta="center"
        mt={16}
        mx="auto"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry
      </Text>
      <Grid mt={81} gutter={25}>
        {exDishes.map((item, index) => (
          <Grid.Col xs={6} md={4} lg={3} key={index}>
            <Dish item={item} />
          </Grid.Col>
        ))}
      </Grid>
      <Pagination
        total={5}
        value={page}
        onChange={setPage}
        my={89}
        position="center"
        previousIcon={() => (
          <FontAwesomeIcon icon={faArrowLeft} color="#FEB918" />
        )}
        nextIcon={() => <FontAwesomeIcon icon={faArrowRight} color="#FEB918" />}
        styles={(theme) => ({
          control: {
            borderRadius: "50%",
            width: `${rem(40)}`,
            height: `${rem(40)}`,
            color: theme.colors.darkprince[0],
            "&[data-active]": {
              backgroundColor: "#FEB918",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#FEB950 !important",
              },
            },
          },
        })}
      />
    </Container>
  );
};

export default Dishes;
