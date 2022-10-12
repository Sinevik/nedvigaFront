import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled.div`
    width: 90%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
`;

export const Section = styled.div`
    width: 100%;
    padding: 0px 0px 0px 0px;
    display: flex;
    min-height: 90px;
    flex-direction: column;
`;

export const SubSection = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Spacer = styled.div`
    width: 5%;
`;

export const TopSection = styled.div`
    width: 100%;
    padding: 0px 0px 10px 0px;
`;

export const BottomSection = styled.div`
    width: 100%;
    max-width: 400px;
    height: 50%;
`;

export const Paragraph = styled.p`
   margin: 0px;
   padding: 5px 0px 0px 0px;
   font-family: Roboto;
   font-style: normal;
   font-weight: 500;
   font-size: 12px;
   line-height: 20px;
   letter-spacing: 0.01em;
   color: #9595B1;
`;
