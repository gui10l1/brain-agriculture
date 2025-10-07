import Row from "../../../../shared/ui/atoms/Row";
import InputGroup from "../../../../shared/ui/molecules/InputGroup";
import { Controller, useForm } from 'react-hook-form';
import type { IFormFarmerData, IFarmerFormProps } from "./interfaces";
import Card from "../../../../shared/ui/molecules/Card";
import FormAtom from "../../../../shared/ui/atoms/Form";
import Button from "../../../../shared/ui/atoms/Button";

export default function FarmersForm({ defaultValues, onSubmit }: IFarmerFormProps) {
  const { control, handleSubmit } = useForm<IFormFarmerData>({
    defaultValues,
  });

  return (
    <Card title="Agricultor">
      <FormAtom onSubmit={handleSubmit(onSubmit || console.log)}>
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

        <Row align="right">
          <Button>Continuar</Button>
        </Row>
      </FormAtom>
    </Card>
  );
}