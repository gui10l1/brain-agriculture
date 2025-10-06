import Row from "../../../../shared/ui/atoms/Row";
import InputGroup from "../../../../shared/ui/molecules/InputGroup";

export default function Form() {
  return (
    <form action="">
      <Row>
        <InputGroup
          label="Nome"
          input={{
            type: 'text',
            placeholder: 'Nome do agricultor',
          }}
        />
      </Row>
    </form>
  );
}