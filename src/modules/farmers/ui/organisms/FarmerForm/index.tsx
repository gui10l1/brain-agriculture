import Row from "../../../../shared/ui/atoms/Row";
import InputGroup from "../../../../shared/ui/molecules/InputGroup";
import { Controller, useForm } from 'react-hook-form';
import type { IFormFarmerData } from "./interfaces";

export default function Form() {
  const { control } = useForm<IFormFarmerData>();

  return (
    <Row>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <InputGroup
            label="Nome"
            input={{
              type: 'text',
              placeholder: 'Nome do agricultor',
              name: field.name,
              onChange: field.onChange,
              value: field.value,
            }}
          />
        )}
      />

      <Controller
        name="document"
        control={control}
        render={({ field }) => (
          <InputGroup
            label="Documento"
            input={{
              type: 'text',
              placeholder: 'Nome do agricultor',
              name: field.name,
              onChange: field.onChange,
              value: field.value,
            }}
          />
        )}
      />
    </Row>
  );
}