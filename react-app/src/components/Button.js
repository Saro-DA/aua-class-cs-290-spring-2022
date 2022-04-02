import "./Button.css";

function Button({ children, onClick, type = "primary" }) {
  console.log("button rerended");
  console.log(children, "-- children of button");

  return (
    <button
      onClick={onClick}
      className={`custom-button custom-button--${type}`}
    >
      {children}
    </button>
  );
}

export default Button;

/*
function myFunc({ lastName, firstName }, { dob, gender }) {
  console.log(firstName, lastName, dob, gender);
}

myFunc(
  { firstName: "Rebecca", lastName: "Asryan" },
  { dob: null, gender: "female" }
);

*/
