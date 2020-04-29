import React from "react";
import Image from "./Image";
import { Content, Group } from "@components";
import { useHistory } from "react-router-dom";
import idx from "idx";
import Text from "./Text";
import Card from "./Card";
import QRCode from "./QRCode";

const bgConfig = {
  firstColor: {
    color: "#82D9F4",
    start: 0,
    end: "18%",
  },
  secondColor: {
    color: "#50B6D6",
    start: "18%",
    end: "75%",
  },
  thirdColor: {
    color: "#405364",
    start: "75%",
    end: "100%",
  },
};

const Details: React.FC<{}> = () => {
  const history = useHistory();
  const state: any = idx(history, (_) => _.location.state);
  return (
    <Content bgConfig={bgConfig} hasHeader={true}>
      <Group>
        <Image image={state.image} />
        <Text style={{ margin: 10 }} weight="bolder" size={18}>
          {state.name}
        </Text>
        <Text weight="light" style={{ marginTop: 0 }} size={15}>
          {state.job}
        </Text>
      </Group>
      <Card />
      <QRCode data={JSON.stringify(state)} />
      <Group />
      <Group />
      <Group />
    </Content>
  );
};

export default Details;
