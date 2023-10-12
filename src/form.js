import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//resolver is to structure the schema
export const Form = () => {
  //schema for validation for how data should look like
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().required(),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  //data will be collected and stored through the functions of submission
  const onSubmit = (data) => {
    console.log(data);
  };

  //the strings inside the register function are "keys" to separate the object components
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" {...register("name")} />
      <input type="email" placeholder="email" {...register("email")} />
      <input type="age" placeholder="age" {...register("age")} />
      <input type="password" placeholder="password" {...register("password")} />
      <input
        type="password"
        placeholder="confirm password"
        {...register("confirmpassword")}
      />
      <input type="submit" />
    </form>
  );
};
