import styled from "styled-components";

export interface FilterStyledProps {
  width: number;
}

export const FilterLayout = styled.div`
  float: left;
  margin-bottom: 20px;
`;
export const FilterBox = styled.div`
  width: 1020px;
  height: 30px;
  display: flex;
  justify-content: center;
  line-height: 30px;
  font-size: 14px;
`;

export const FilterButton = styled.button<FilterStyledProps>`
  width: ${(props) => `${props.width}px`};
  height: 25px;
  border: none;
  border-radius: 25px;
  border: 1px solid #212121;
  text-align: center;
  margin: 0 2px 10px 2px;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`;
