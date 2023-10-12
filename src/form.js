import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//resolver is to structure the schema
export const Form = () => {
  //schema for validation for how data should look like
  const schema = yup.object().shape({
    name: yup.string().required("Your name is required"),
    email: yup.string().email().required(),
    age: yup
      .number()
      .positive()
      .integer()
      .min(18)
      .required("Age is required to calculate your BMI"),
    password: yup.string().required(),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
      {/* if name field is an empty string or is null, error message will be displayed */}
      <p>{errors.name ? errors.name.message : null}</p>
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
