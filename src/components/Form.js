import ClaimForm from "./ClaimForm";
import "../styles/form.css";
function Form() {
    return (
        <>
            <article className="right">
                <div className="info">
                    <span>Try it for free </span>
                    then $20/mo. thereafter
                </div>
                <ClaimForm />
            </article>
        </>
    );
}

export default Form;
