import { TextField, type TextFieldVariants } from "@mui/material";
import { Controller, type Control, type FieldValues, type Path, type RegisterOptions } from "react-hook-form";

type FormInputProps<T extends FieldValues = any> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  variant?: TextFieldVariants;
  rules?: RegisterOptions;
};

export default function FormInputText<T extends FieldValues>({
  name,
  control,
  label,
  rules,
  variant = "outlined"
}: FormInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules as any}
      render={({ field, fieldState }) => (
        <TextField
          fullWidth
          margin="normal"
          size="small"
          variant={variant}
          label={label}
          {...field}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
}