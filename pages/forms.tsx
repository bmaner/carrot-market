import { FieldErrors, useForm } from "react-hook-form";
// Less code (checked)
// Better validation
// Better Errors(set ,clear, display)
// Have control over inputs
// Don't deal with event (checked)
// Easier Inputs (checked)

interface LoginForm {
  username: string;
  password: string;
  email: string;
  errors?: string;
}

export default function Forms() {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    reset,
    resetField,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange", // default는 onSubmit으로 되어있다.
  });
  //register function의 역할 : input과 state를 연결
  //watch function의 역할 : input의 value에 무엇이 들어왔는지 보기 위한 함수
  //formState 가져오면 onInvalid 함수 밖에서도 Erros 객체를 가져올 수 있고, 이를 ui에도 보여줄 수 있다.
  console.log(watch());
  const onValid = (data: LoginForm) => {
    console.log("im valid baby");
    setError("username", { message: "Taken username" });
    // reset();
    resetField("password");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "username is required",
          minLength: {
            message: "이름은 5글자 이상이어야 합니다.",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      ></input>
      {errors.username?.message}
      <input
        {...register("email", {
          required: "email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail은 사용할 수 없습니다.",
          },
        })}
        type="email"
        placeholder="Email "
        className={`${Boolean(errors.email) ? "border-red-500" : ""}`}
      ></input>
      {errors.email?.message}
      <input
        {...register("password", { required: "password is required" })}
        type="password"
        placeholder="Password"
      ></input>
      <input type="submit" value="Create Account"></input>
    </form>
  );
}
