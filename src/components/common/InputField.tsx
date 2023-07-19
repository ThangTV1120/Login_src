// import React from 'react';
import TextField from '@mui/material/TextField';
import { useFormContext } from "react-hook-form"
import {
    Controller,
    FieldValues, //kieu du lieu ko can biet truoc
    Path,
    PathValue,
} from "react-hook-form";
interface InputFieldProps<T extends FieldValues > {
    name: Path<T>;
    onChange?: (value: T) => void;
    label:Path<T>;
}
const InputField = <T extends FieldValues,>(props: InputFieldProps<T>) => {
    const { register, formState: { errors } ,control} = useFormContext<T>()

    return (
        <>
             <Controller
                name={props.name}
                control={control}
            //fieldState chua thong tin ve trang trai cua field chang han nhu errors
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}// ke thua thuoc tinh cua field
                        fullWidth
                        label={props.label}
                        error={!!errors?.[props.name]}
                        // helperText={errors?.[props.name] && errors?.[props.name]?.message?.toString()}
                        helperText={fieldState.error?.message?.toString()}
       
                    >
                    </TextField>
                )}
            ></Controller>


            {/* <TextField
                {...register(props.name)}
                fullWidth
                label={props.label}
                // placeholder=" " 
                // type='password'
                error={!!errors?.[props.name]}
                helperText={errors?.[props.name] && errors?.[props.name]?.message?.toString()}
                // InputLabelProps={{ shrink: false }}
            >
            </TextField> */}
         
        </>


    )


}

export default InputField
