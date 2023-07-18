// import React from 'react';
import TextField from '@mui/material/TextField';
import { useFormContext } from "react-hook-form"
import {
    FieldValues,
    Path,
    PathValue,
} from "react-hook-form";
interface InputFieldProps<T extends FieldValues> {
    name: Path<T>;
    onChange?: (value: T) => void;
    label:Path<T>;
}
const InputField = <T extends FieldValues,>(props: InputFieldProps<T>) => {
    const { register, formState: { errors } } = useFormContext<T>()
    // let { name } = props;
    // console.log(name)
    // console.log(errors?.[props.name]?.message);

    return (
        <>
            <TextField
                {...register(props.name)}
                fullWidth
                label={props.label}
                placeholder=" " error={!!errors?.[props.name]}
                helperText={errors?.[props.name] && errors?.[props.name]?.message?.toString()}
            >
            </TextField>
            {/* {errors?.[props.name] && errors?.[props.name]?.message } */}
            {/* <div className="mb-1 text-red-500">
                {errors?.[props.name] && errors?.[props.name]?.message}
            </div> */}
        </>


    )


}

export default InputField
