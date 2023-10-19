import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//resolver is to structure the schema
export const Form = () => {
  //schema for validation for how data should look like
  const schema = yup.object().shape({
    name: yup.string().required("Your name is required"),
    email: yup
      .string()
      .email("Incorrect format of email")
      .required("Please enter your email address"),
    age: yup
      .number("Age should be a numerical value")
      .positive()
      .integer()
      .min(18)
      .required("Age is required to calculate your BMI"),
    password: yup
      .string()
      .required("Please enter password for security purposes"),
    confirmpassword: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "Confirmed password does not match your password"
      )
      .required("Please confirm password for security purposes"),
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
      <p id="error">{errors.name ? errors.name.message : null}</p>
      <input type="text" placeholder="email" {...register("email")} />
      <p id="error">{errors.email ? errors.email.message : null}</p>
      <input type="number" placeholder="age" {...register("age")} />
      <p id="error">{errors.age ? errors.age.message : null}</p>

      <input type="password" placeholder="password" {...register("password")} />
      <p id="error">{errors.password ? errors.password.message : null}</p>
      <input
        type="password"
        placeholder="confirm password"
        {...register("confirmpassword")}
      />
      <p id="error">
        {errors.confirmpassword ? errors.confirmpassword.message : null}
      </p>
      <input type="submit" />
    </form>
  );
};
