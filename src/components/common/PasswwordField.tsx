
import TextField from '@mui/material/TextField';
import { useFormContext} from "react-hook-form"
import {
    FieldValues,
    Path,
    PathValue,
} from "react-hook-form";
interface PasswordFieldProps<T> {
    [x: string]: any;
    // name: Path<T>;
    onChange?: (value: T) => void;
}
const PasswordField = <T,>(props: PasswordFieldProps<T>) => {
    const { register,formState: { errors } } = useFormContext() 
    return (
        <TextField {...register(props.name)} placeholder=" " type='password' ></TextField>
    )


}

export default PasswordField