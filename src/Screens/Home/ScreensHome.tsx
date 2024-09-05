import { View, Text } from "react-native";
import React from "react";
import { Avata, Container, Row, Section, SpaceComponent, Textconponent } from "../../components";
import { processFontFamily } from "expo-font";
import { globaStyles } from "../../styles/globaStyles";

const ScreensHome = () => {
  return (
    <Container>
      <Section >
        <Row> 
        <Avata photourl='https://lh3.googleusercontent.com/fife/ALs6j_Gao40paPTbjixkh5yf28InpPY0Oid7DTi4N7qBL-pmJTDpWLuPhRN61Jegz8zrwoJZvXgABGNS29DSLPOKoCswcQ0cv_JaSLRTSC0ApGoqAO4G_u6rhXRN_lo4iYCWd_u3Sb354TdU7Z1qtRhmLHxoMPRdl-_QZ_gJVDgyid16ebv5Oj-yHOKnuQqsOniVqOLYIzSK9tDm6hzSmVFLPFa0GetfDCKlCNAmeI8SLx8xBn4CjWIEqaPyoJ_QEPBP3LBFgO_lm5jCUxHjXi_ELpdIa0Ly6gvT15o7ihXemy8nZ9XIV6hFniQPUMBSqW5qNN7JuwAtDh19EDb_KxD6D1Glpb7CokvqNzJqBENT0pTZRP3cJd6gkuqPHpmCmTyMuJ4X2n-BIZ4t_9VU9qwrvzXJe_TsGH9erdtKD8Q19uYQ8CyRPxUeH0X0Mv7OgJNvEUBjfQmij4ReCBAE4dzvfgHtvCn5AiTlXxcdhsNvXbQ0plG2sJpIx17PnEYzgZLGJbqUZNdYlMTpMa_InIjEGmfrl-grZXAjZ5VB5mZE1zbiRTE9QSL_VZKoqG2-6JCj6l6HtMAbc2Ak7rdI7JlS6TV7NifxNlNjtT6eBjTlJH6nLH-pBweP6Q9j2QPt8fm8GT9Okpfcf1OC8dZW4g6L5qKsvaTZ67Pi0rreDOZIJ7ZvwYt57L1CQgJ3AoMl1ZJCJgIe8zxp020FvcJzIsA8qGlgSyyDjYmsidEx-B1o1TsUSA6zGFwIaArZ14K5jfCZCTsMGA3_FvVkegXfiasCASCXKzl8s7v4YEPgL_f5jq5qzwksBAWXoaNmD1EGJ6jOMlR3NW6-D366bQWiT2sgHWmgaRUVCDm7nxkA7zhiLGOFJjvbMNx8qYFe0DF9GD0WQHwK5aWm8b2qCMJ1M1f-UJmyek5cjn1NHJZZy9ygTLwHotBCIA5ywC1QYWO5wOz_PmaFa2dXnlhkqZMx3k56vVzbzEH_RsTF1XaCo5xwLIawp84DmexCpUuRVlNoHckWtdGYnHkLEhFCMPPTp2luzrn4owWqyr7j1PTqCx-8Eg=w1920-h912'/>        
        <SpaceComponent  width={12} height={50}/>
        <Textconponent   text='Martina Wolna' tyle="title" size={15} styles = {{textTransform : 'uppercase'}} flex={1}/>
        </Row>
      
        
      </Section>
      <Section>
        <Row>
          <Row styles={{flex : 1}}>
            <Textconponent text="Search" /> 
          </Row>
        </Row>
      </Section>
    </Container>
  );
};
export default ScreensHome;
