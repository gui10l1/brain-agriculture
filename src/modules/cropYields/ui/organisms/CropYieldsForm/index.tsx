import { Controller, useFieldArray, useForm } from "react-hook-form";
import Row from "../../../../shared/ui/atoms/Row";
import type { ICropYieldsForm } from "./interfaces";
import InputGroup from "../../../../shared/ui/molecules/InputGroup";
import Card from "../../../../shared/ui/molecules/Card";
import Button from "../../../../shared/ui/atoms/Button";
import Form from "../../../../shared/ui/atoms/Form";

export default function CropYieldsForm() {
  const { control } = useForm<ICropYieldsForm>({
    defaultValues: {
      crops: [{ name: '' }]
    }
  });
  const { fields } = useFieldArray({
    name: 'crops',
    control,
  });

  return (
    <Card title="Safras">
      <Form>
        <Row>
          <Controller
            name="year"
            control={control}
            render={({ field }) => (
              <InputGroup
                label="Ano da safra"
                input={{
                  type: 'number',
                  max: 9999,
                  min: 1,
                  placeholder: '2025',
                  onChange: field.onChange,
                  value: field.value,
                }}
              />
            )}
          />
        </Row>

        <Row>
          {fields.map((field, index) => (
            <Controller
              key={field.id}
              name={`crops.${index}.name`}
              control={control}
              render={({ field }) => (
                <InputGroup
                  label={`Cultura ${index + 1}`}
                  input={{
                    type: 'text',
                    placeholder: 'Soja',
                    onChange: field.onChange,
                    value: field.value,
                  }}
                />
              )}
            />
          ))}
        </Row>

        <Row align="right">
          <Button>Finalizar</Button>
        </Row>
      </Form>
    </Card>
  );
}