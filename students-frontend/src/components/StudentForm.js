import { useForm } from "react-hook-form";

function StudentForm({ submitHandler }) {
    const { register, handleSubmit, reset } = useForm();

    return (
        <form onSubmit={handleSubmit((data) => { submitHandler(data); reset(); })}>
            <input {...register("firstName")} placeholder="First name" />
            <input {...register("lastName")} placeholder="Last name" />
            <input {...register("email")} placeholder="Email" />
            <input {...register("password")} placeholder="Password" />
            <input type="submit" />
        </form>
    )
}

export default StudentForm;