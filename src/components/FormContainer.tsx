import React from "react";
import styled from "styled-components";
import { strings } from "../constants/strings";
import { theme } from "../theme";
import { ReactComponent as IconArrow } from "../assets/icon-arrow.svg";

const FormContainer = styled.form`
  width: 600px;
  padding: 20px 40px;
  position: absolute;
  top: 5x;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
`;

const StyledLegend = styled.legend`
  width: 100%;
  font-size: 28px;
  line-height: 28px;
  text-align: center;

  color: ${theme.colors.lightGray};
  font-weight: 400;
  margin-bottom: ${theme.spacing.medium};
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: ${theme.spacing.huge};
  background: ${theme.colors.lightGray};
  border-radius: 10px;
  border: 1px solid #d3e2e5;
  outline: none;
  color: #5c8599;
  margin: ${theme.spacing.medium} 0;
`;

const ConfirmButton = styled.button`
  width: ${theme.spacing.huge};
  border: 0;
  cursor: pointer;
  background-color: ${theme.colors.veryDarkGray};
  border-radius: 0 10px 10px 0;
  font-weight: 800;
  transition: background-color 0.2s;
`;

const StyledInput = styled.input`
  flex: 1;
  width: 100%;
  background: ${theme.colors.lightGray};
  border: 0px solid #d3e2e5;
  border-radius: 10px;
  outline: none;
  padding: ${theme.spacing.nano};
`;

interface FormContainerComponentProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

export const FormContainerComponent: React.FC<FormContainerComponentProps> = ({
  onChange,
  handleSubmit,
}) => {
  return (
    <FormContainer>
      <StyledLegend>{strings.siteTitle}</StyledLegend>
      <InputContainer>
        <StyledInput
          type="text"
          onChange={onChange}
          id="address"
          placeholder="Endereço de IP"
        />
        <ConfirmButton
          type="button"
          onClick={async () => {
            handleSubmit();
          }}
        >
            <IconArrow />
        </ConfirmButton>
      </InputContainer>
    </FormContainer>
  );
};
