import { IDish } from "@/libs/mockdishes";
import { faCartPlus, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Text, rem, Card, Image, Rating, Title, Group, Box, ActionIcon } from "@mantine/core";
import React from "react";

interface DishProps {
  item: IDish;
};

const Dish: React.FC<DishProps> = ({item}) => {
  return (
    <Card
      withBorder
      radius={rem(10)}
      className="border-[0.7px] border-[#70707033/20] hover:border hover:border-[#F9A755] hover:shadow-lg"
    >
      <Image src={item.image_src} alt={item.name} maw={rem(134)} mx="auto" />
      <Rating defaultValue={item.rating} mt={14} size="sm" />
      <Title
        order={3}
        mt={5.27}
        ff="Segoe UI, sans-serif"
        fz={18}
        lh={rem(22.36)}
        color="onyx.0"
      >
        {item.name}
      </Title>
      <Text mt={13.61} fz={12} lh={rem(20)} c="darkprince.0">
        {item.description}
      </Text>
      <Group mt={27} position="apart">
        <Text fz={16} lh={rem(21)} fw={600}>
          ${item.cost}
        </Text>
        <Box className="flex">
          <ActionIcon
            variant="filled"
            size={rem(28)}
            mr={9}
            className="bg-[#F24D21] text-white"
          >
            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
          </ActionIcon>
          <ActionIcon variant="filled" size={rem(28)} bg="onyx.0">
            <FontAwesomeIcon icon={faShareNodes} />
          </ActionIcon>
        </Box>
      </Group>
    </Card>
  );
};

export default Dish;
