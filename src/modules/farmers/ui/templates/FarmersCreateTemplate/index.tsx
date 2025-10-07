import Container from "../../../../shared/ui/atoms/Container";
import Header from "../../../../shared/ui/organisms/Header";
import FarmerForm from "../../organisms/FarmerForm";
import { Form } from "./styles";

export default function FarmersCreateTemplate() {
  return (
    <>
      <Header showBackButton />

      <Container>
        <Form>
          <FarmerForm />
        </Form>
      </Container>
    </>
  );
}