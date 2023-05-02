import "./Register.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterModel } from "../../../Models/RegisterModel";
import notifyService from "../../../Sevices/NotificationService";


function Register(): JSX.Element {
   
    const schema = yup.object().shape({
        firstName:
            yup.string()
                .required("First Name is required"),
        lastName:
            yup.string()
                .required("First Name is required"),
        email:
            yup.string()
                .email("Invalid Email format")
                .required("Email is required"),
        id:
            yup.string()
            .matches(/^\d{9}$/, 'ID must be exactly 9 digits')
            .required('ID is required'),
        
        password:
             yup.string()
             .length(4, "password must be at least 4 charters")
             .required("Password is required"),

        confirm:
             yup.string()
            .required("Password is required")
            .oneOf([yup.ref('password')], 'Your passwords do not match.')


    });


    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
    useForm<RegisterModel>({ mode: "all", resolver: yupResolver(schema) });
   
   //Developer Code to send to remote sever
    const sendDataToRemoteServer = (register:RegisterModel) => {
        console.log('Im going to send this info to remote server');
        console.log(register);
        notifyService.success('Yehay!!!!!');

   }
   
   
    return (
        <div className="Register">
			{/*Orel*/}
			{/*Ovadia*/}
			{/*orell2.ovadia@gmail.com*/}
            {/*065940835*/}
			{/*1234*/}
			{/*1234*/}
            
            <h1>Register</h1>
            <form onSubmit={handleSubmit(sendDataToRemoteServer)}>
                {errors?.firstName && <span>{errors.firstName.message}</span>}
                <input {...register("firstName")} type="text" placeholder="First Name..." />
                
                {errors?.lastName && <span>{errors.lastName.message}</span>}
                <input {...register("lastName")} type="text" placeholder="Last Name..." />
                
                {errors?.email && <span>{errors.email.message}</span>}
                <input {...register("email")} type="email" placeholder="Email..." />
                
                {errors?.id && <span>{errors.id.message}</span>}
                <input {...register("id")} type="id" placeholder="Id..." />
                
                {errors?.password && <span>{errors.password.message}</span>}
                <input {...register("password")} type="password" placeholder="Password..." />
                
                {errors?.confirm && <span>{errors.confirm.message}</span>}
                <input {...register("confirm")} type="password" placeholder="Confirm Password..." />
                
                <button type="submit" disabled={!isValid}>Send</button>


            </form>
        </div>
    );
}

export default Register;
