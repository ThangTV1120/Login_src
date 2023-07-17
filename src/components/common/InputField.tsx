// import React from 'react';
import TextField from '@mui/material/TextField';
import { useFormContext } from "react-hook-form"
import {
    FieldValues,
    Path,
    PathValue,
} from "react-hook-form";
interface InputFieldProps<T> {
    name: Path<T>;
    onChange?: (value: T) => void;
}
const InputField = <T,>(props: InputFieldProps<T>) => {
    const { register,formState: { errors } } = useFormContext()
    let {name} =props;
    // console.log(name)
    console.log(errors?.[props.name]?.message);

    return (
        <>
            <TextField {...register(props.name)} placeholder=" " ></TextField>
            {errors?.[props.name] && errors?.[props.name]?.message }
            {/* <div className="mb-1 text-red-500">
                {errors?.name && errors.name.message}
            </div> */}
        </>


    )


}

export default InputField
