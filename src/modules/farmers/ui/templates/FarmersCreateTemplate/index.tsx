import Container from "../../../../shared/ui/atoms/Container";
import Header from "../../../../shared/ui/organisms/Header";
import Form from "../../organisms/Form";

export default function FarmersCreateTemplate() {
  return (
    <>
      <Header showBackButton />

      <Container>
        <Form />
      </Container>
    </>
  );
}