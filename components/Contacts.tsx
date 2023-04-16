import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Text, rem } from "@mantine/core";
import React from "react";


const Contacts: React.FC = () => {
  return (
    <Container size={1440} className="xl:px-[100px] pt-[80px] -mb-32 relative">
      <div className="w-max-[1170] mx-auto shadow-xl rounded-[30px] bg-white">
        <div className="md:flex px-4 lg:px-[98px] py-[65px] items-center justify-between gap-x-2">
          <div className="flex items-center">
            <div className="w-[50px] sm:w-[100px] h-[50px] sm:h-[100px] bg-[#FEB918] rounded-full flex justify-center items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                color="#fff"
                className="h-[20px] sm:h-[40px]"
              />
            </div>
            <Text ml={18} fz={28} lh={rem(37.5)} fw={600}>
              info@youremail.com
            </Text>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <div className="w-[50px] sm:w-[100px] h-[50px] sm:h-[100px] bg-[#FEB918] rounded-full flex justify-center items-center">
              <FontAwesomeIcon
                icon={faPhone}
                color="#fff"
                className="h-[20px] sm:h-[40px]"
              />
            </div>
            <Text ml={18} fz={28} lh={rem(37.5)} fw={600}>
              +880 321 655 9985
            </Text>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contacts;
