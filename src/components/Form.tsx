// import { useRef} from "react";
//import { useState } from "react";

import { useForm, type FieldValues } from "react-hook-form";


const Form = () => {
    const {register,handleSubmit,formState:{errors}}=useForm();
    console.log(errors)

    const onSubmit = (data:FieldValues)=> console.log(data);
    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name : </label>
            <input  {...register('name',{required:true,maxLength:2})} id="name" type="text" className="form-input" />
            {errors.name?.type==="required" && <p>Name is required.</p>}
        </div>    
        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age : </label>
            <input {...register('age')} id="age" type="number" className="form-input" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>);
}   

export default Form