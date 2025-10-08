import { Controller, useForm } from "react-hook-form";
import type { IFarmsFormProps, IFormFarmData } from "./interfaces";
import InputGroup from "../../../../shared/ui/molecules/InputGroup";
import Row from "../../../../shared/ui/atoms/Row";
import Card from "../../../../shared/ui/molecules/Card";
import Button from "../../../../shared/ui/atoms/Button";
import Form from "../../../../shared/ui/atoms/Form";

export default function FarmsForm({ defaultValues, onSubmit }: IFarmsFormProps) {
  const { control, handleSubmit } = useForm<IFormFarmData>({
    defaultValues,
  });

  return (
    <Card title="Fazendas">
      <Form onSubmit={handleSubmit(onSubmit || console.log)}>
        <Row>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <InputGroup
                label="Nome"
                input={{
                  type: 'text',
                  placeholder: 'Fazenda Feliz',
                  name: field.name,
                  value: field.value,
                  onChange: field.onChange,
                }}
              />
            )}
          />
        </Row>

        <Row>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <InputGroup
                label="Cidade"
                input={{
                  type: 'text',
                  placeholder: 'Belo Horizonte',
                  name: field.name,
                  value: field.value,
                  onChange: field.onChange,
                }}
              />
            )}
          />

          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <InputGroup
                label="Estado"
                input={{
                  type: 'text',
                  placeholder: 'MG',
                  name: field.name,
                  value: field.value,
                  onChange: field.onChange,
                }}
              />
            )}
          />
        </Row>

        <Row>
          <Controller
            name="agriculturalArea"
            control={control}
            render={({ field }) => (
              <InputGroup
                label="Área agrícula (em hec)"
                input={{
                  type: 'number',
                  placeholder: '1,5',
                  name: field.name,
                  value: field.value,
                  onChange: field.onChange,
                }}
              />
            )}
          />

          <Controller
            name="vegetationArea"
            control={control}
            render={({ field }) => (
              <InputGroup
                label="Área de vegetação (em hec)"
                input={{
                  type: 'number',
                  placeholder: '1,5',
                  name: field.name,
                  value: field.value,
                  onChange: field.onChange,
                }}
              />
            )}
          />

          <Controller
            name="totalArea"
            control={control}
            render={({ field }) => (
              <InputGroup
                label="Área total (em hec)"
                input={{
                  type: 'number',
                  placeholder: '3',
                  name: field.name,
                  value: field.value,
                  onChange: field.onChange,
                }}
              />
            )}
          />
        </Row>

        <Row align="right">
          <Button>Continuar</Button>
        </Row>
      </Form>
    </Card>
  );
}