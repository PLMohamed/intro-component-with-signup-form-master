import InputField from "./InputField";
import "../styles/claimForm.Css";
import { useEffect } from "react";

function ClaimForm() {
    useEffect(() => {
        const form = document.querySelector("form");
        form.addEventListener("submit", (e) => {
            //Checking if input are empty
            const inputFields = document.querySelectorAll("input");
            inputFields.forEach((input) => {
                const errorSpan = input.parentElement.querySelector("span");
                const type = input.getAttribute("type");
                if (errorSpan) {
                    input.parentElement.removeChild(errorSpan);
                    input.classList.remove("input-error");
                }

                if (input.value === "") {
                    input.classList.add("input-error");
                    const error = document.createElement("span");
                    error.innerHTML = "This field is required";
                    input.parentElement.appendChild(error);
                    try {
                        e.preventDefault();
                    } catch (error) {}
                    return;
                }

                switch (type) {
                    case "email":
                        const emailRegex =
                            /^[a-zA-Z0-9.+_]+@[a-zA-Z0-9.+_]+.[a-zA-Z]{2,4}$/;
                        if (!emailRegex.test(input.value)) {
                            input.classList.add("input-error");
                            const error = document.createElement("span");
                            error.innerHTML = "Please provide a valid email";
                            input.parentElement.appendChild(error);
                            try {
                                e.preventDefault();
                            } catch (error) {}
                            return;
                        }
                        break;
                    case "password":
                        if (input.value.length < 8) {
                            input.classList.add("input-error");
                            const error = document.createElement("span");
                            error.innerHTML =
                                "Password must be at least 8 characters";
                            input.parentElement.appendChild(error);
                            try {
                                e.preventDefault();
                            } catch (error) {}
                            return;
                        }
                        break;
                }
            });
        });
    }, []);
    return (
        <>
            <section className="form">
                <form noValidate>
                    <article className="formContainer">
                        <InputField
                            type={"text"}
                            name={"firstName"}
                            placeholder={"First Name"}
                        />
                        <InputField
                            type={"text"}
                            name={"lastName"}
                            placeholder={"Last Name"}
                        />
                        <InputField
                            type={"email"}
                            name={"email"}
                            placeholder={"Email Address"}
                        />
                        <InputField
                            type={"password"}
                            name={"password"}
                            placeholder={"Password"}
                        />
                        <button type="submit">Claim your free trial</button>
                        <p>
                            By clicking the button you are agreeing to our{" "}
                            <span>Terms and services</span>
                        </p>
                    </article>
                </form>
            </section>
        </>
    );
}

export default ClaimForm;
