
import TextField from '@mui/material/TextField';
import { useFormContext } from "react-hook-form"
import {
    FieldValues,
    Path,
    PathValue,
    Controller,
} from "react-hook-form";
interface PasswordFieldProps<T extends FieldValues> {

    name: Path<T>;
    label: Path<T>;
    type?: Path<T>;
}
const PasswordField = <T extends FieldValues,>(props: PasswordFieldProps<T>) => {
    const { register, formState: { errors }, control } = useFormContext()
    return (
        <>
            <Controller
                name={props.name}
                control={control}

                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        fullWidth
                        label={props.label}
                        type={props.type ? props.type : "text"}
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                    >
                    </TextField>
                )}
            ></Controller>
            {/* <TextField
                {...register(props.name)}
                fullWidth
                // placeholder=" "
                label={props.label}
                type={props.type ? props.type : "text"}
                // type='password'
                error={!!errors?.[props.name]}
                helperText={errors?.[props.name] && errors?.[props.name]?.message?.toString()}
                // InputLabelProps={{ shrink: false }}
            >
            </TextField> */}
            {/* <div className="mb-1 text-red-500">
                {errors?.[props.name] && errors?.[props.name]?.message?.toString()}
            </div> */}
        </>

    )


}

export default PasswordField
