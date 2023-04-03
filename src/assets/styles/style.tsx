import styled from "styled-components";
import { IButton } from "../../types/types";
import { ButtonStyle } from "../../static/style";

const handleBackgroundColorType = (type: string | undefined) => {
  switch (type) {
    case "success":
      return ButtonStyle.success.backgroundColor;
    case "danger":
      return ButtonStyle.danger.backgroundColor;
    default:
      return ButtonStyle.primary.backgroundColor;
  }
};

const handleBackgroundColorHoverType = (type: string | undefined) => {
  switch (type) {
    case "success":
      return ButtonStyle.success.backgroundColorHover;
    case "danger":
      return ButtonStyle.danger.backgroundColorHover;
    default:
      return ButtonStyle.primary.backgroundColorHover;
  }
};

export const Button = styled.a<IButton>`
  cursor: pointer;
  color: #fff;
  background-color: ${({ type }) => handleBackgroundColorType(type)};
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  display: inline-block;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: 0.375rem;
  &:hover {
    background-color: ${({ type }) => handleBackgroundColorHoverType(type)};
    color: #fff;
    border-color: ${({ type }) => handleBackgroundColorHoverType(type)};
  }
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 1px 1px rgba(0, 0, 0, 0.075);
  opacity: ${({ disabled }) => (disabled ? 0.65 : 1)};
`;
