import React from "react";
import styled from "styled-components";
import { strings } from "../constants/strings";
import { theme } from "../theme";
import { px2vw } from "../utils/utils";

const ResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  background-color: ${theme.colors.lightGray};
  max-width: 100%;
  position: absolute;
  border-radius: ${px2vw(16)};
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 1;

  @media (min-width: 375px) {
    flex-wrap: nowrap;
  }
`;
export const Box = styled.div`
  display: flex;
  width: ${px2vw(240)};
  min-height: ${px2vw(120, 768)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${theme.colors.lightGray};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(240, 768)};
    min-height: ${px2vw(120, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(240)};
    min-height: ${px2vw(120)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  color: ${theme.colors.darkGray};
  font-size: 1.5rem;
text-align: left;
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: ${theme.colors.veryDarkGray};
  font-size: 2rem;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

interface ResultComponentProps {
  ipAddress: string;
  location: string;
  timezone: string;
  isp: string;
}

export const ResultComponent: React.FC<ResultComponentProps> = ({
  ipAddress,
  location,
  timezone,
  isp,
}) => {

  return (
    <ResultContainer>
      <Box>
        <BoxTitle>{strings.resultAddressLabel}</BoxTitle>
        <BoxText>{ipAddress}</BoxText>
      </Box>
      <Box>
        <BoxTitle>{strings.resultLocationLabel}</BoxTitle>
        <BoxText>{location}</BoxText>
      </Box>
      <Box>
        <BoxTitle>{strings.resultTimezoneLabel}</BoxTitle>
        <BoxText>{timezone}</BoxText>
      </Box>
      <Box>
        <BoxTitle>{strings.resultIspLabel}</BoxTitle>
        <BoxText>{isp}</BoxText>
      </Box>
    </ResultContainer>
  );
};
