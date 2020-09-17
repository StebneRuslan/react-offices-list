import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: rgb(23, 87, 134);
  display: flex;
`;

export const MainHeaderWrapper = styled(HeaderWrapper)`
  height: 50px;
  padding: 15px 25px;
  margin-bottom: 25px;
  justify-content: space-between;
`;

export const HeaderNavigationWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const ImgWrapper = styled.img`
  margin-right: 30px;
`;
