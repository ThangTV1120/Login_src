
import TextField from '@mui/material/TextField';
import { useFormContext } from "react-hook-form"
import {
    FieldValues,
    Path,
    PathValue,
} from "react-hook-form";
interface PasswordFieldProps<T> {
    // [x: string]: any;
    name: Path<T>;
    label:Path<T>;
    type?:Path<T>;
}
const PasswordField = <T,>(props: PasswordFieldProps<T>) => {
    const { register, formState: { errors } } = useFormContext()
    return (
        <>
            <TextField
                {...register(props.name)}
                fullWidth
                placeholder=" "
                label={props.label}
                type={props.type ? props.type : "text"}
                error={!!errors?.[props.name]}
                helperText={errors?.[props.name] && errors?.[props.name]?.message?.toString()}
            >
            </TextField>
            {/* <div className="mb-1 text-red-500">
                {errors?.[props.name] && errors?.[props.name]?.message?.toString()}
            </div> */}
        </>

    )


}

export default PasswordField
