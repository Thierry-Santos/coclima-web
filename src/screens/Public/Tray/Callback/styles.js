import styled from 'styled-components';
import colors from '../../../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const Logo = styled.img`
  height: 100px;

  @media(max-width: 800px) {
    height: 50px;
  }
`;

export const Description = styled.a`
  font-family: 'Inter';
  font-size: 20px;
  text-align: start;
  color: ${colors.pretoDaMassa};

  @media(max-width: 800px) {
    font-size: 16px;
  }
`;

export const DescriptionLink = styled.a`
  font-family: 'Inter';
  font-size: 20px;
  text-align: start;
  margin-top: 10px;
  font-weight: 600;
  color: #004AAD;
  cursor: pointer;

  @media(max-width: 800px) {
    font-size: 16px;
  }
`;

export const BulletDescription = styled.a`
  font-family: 'Inter';
  font-size: 20px;
  text-align: start;
  margin-top: 10px;
  margin-left: 10px;
  color: ${colors.pretoDaMassa};

  @media(max-width: 800px) {
    font-size: 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media(max-width: 800px) {
    flex-direction: column;
  }
`;

export const ItemWithImage = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 120px;
  justify-content: center;
  width: 50vw;
  min-width: 100px;

  @media(max-width: 800px) {
    margin-left: 10px;
    width: 90vw;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;

  @media(max-width: 800px) {
    width: 80vw;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin: 3vh 0 3vh 0;
`;

export const ImageItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin: 20px 0 20px 0;

  @media(max-width: 800px) {
    flex-direction: column;
  }
`;

export const Pin = styled.div`
  width: 2vw;
  height: 2vw;
  min-height: 20px;
  min-width: 20px;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  background-color: ${colors.verdeDaMassa};
  margin: 0 10px 0 10px;
`;

export const Image = styled.img`
  margin-left: 15px;
  height: 190px;

  @media(max-width: 800px) {
    margin-left: 0px;
    height: 150px;
  }
`;

export const ImageLeft = styled.img`
  height: 230px;
  margin-right: 100px;

  @media(max-width: 800px) {
    height: 100px;
  }
`;

export const Loading = styled.div`
  position: absolute;
  background-color: #909090;
  opacity: 0.9;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;