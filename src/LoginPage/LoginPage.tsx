import React from "react";
import "./LoginPage.css"
import { Formik } from "formik";
import GeneralButton from "../GeneralButton/GeneralButton";
import mlogo from "./microsoft_logo.png"
import glogo from "./google-logo-9808.png"
import { getAuth, signInWithPopup, OAuthProvider, GoogleAuthProvider,} from "firebase/auth";

const provider = new OAuthProvider('microsoft.com');

provider.setCustomParameters({
    prompt: "consent",
    login_hint: "Email",
})

const LoginPage: React.FC = () => {
    return (
        <div className={"LoginPage"}>
            <Formik
                initialValues={{
                    micro: false,
                    google: false
                }}
                onSubmit={(values) => {
                    if(values.micro === true) {
                        const auth = getAuth();

                        signInWithPopup(auth, provider)
                            .then(value => {

                            })
                            .catch(err => {
                                console.error(err)
                            })

                    }
                    else if(values.google === true) {

                        const auth = getAuth();
                        signInWithPopup(auth, new GoogleAuthProvider())
                            .then((result) => {
                                if(auth.currentUser === null) {
                                    console.log("null")
                                }
                                else {
                                    console.log(auth.currentUser.displayName)
                                }
                            }).catch((error) => {

                        });
                    }
                }}>
                {
                    ({handleSubmit, values}) => (
                        <form onSubmit={handleSubmit} className={"center-vertical"}>
                            <GeneralButton img={glogo} type={"submit"}  text={"Login"} onClick={() => {
                                values.google = true
                            }}/>
                            <br/>
                            <GeneralButton img={mlogo} type={"submit"} text={"Login"} onClick={() => {
                                values.micro = true
                            }}/>
                        </form>
                    )}
            </Formik>
        </div>
    );
};
export default LoginPage;

