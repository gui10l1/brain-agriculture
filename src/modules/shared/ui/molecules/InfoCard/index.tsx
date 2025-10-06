import If from "../../atoms/If";
import Typography from "../../atoms/Typography";
import type { IInfoCard } from "./interfaces";
import { Container, Content } from "./styles";

export default function InfoCard({ title, description, icon: Icon }: IInfoCard) {
  return (
    <Container>
      <If condition={Boolean(Icon)}>
        {Icon}
      </If>

      <Content>
        <Typography as="h1">
          {title}
        </Typography>

        <If condition={Boolean(description)}>
          <Typography as="p">
            {description}
          </Typography>
        </If>
      </Content>
    </Container>
  );
}