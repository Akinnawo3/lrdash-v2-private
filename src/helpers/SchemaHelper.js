import * as Yup from "yup";
import { genders } from "../constants/genders";

const phoneRegex = /^\d{6,18}$/;

const stringRequired = (fieldName) => Yup.string().required(`${fieldName} is required`);

const email = stringRequired("Email").email('Invalid email format');
const password = Yup.string().required("Password is required")
.min(8, "Password is too short - should be 8 chars minimum.")
.matches(/[a-zA-Z]/, "Password can only contain Latin letters.");
const confirmPassword = (passwordField) => Yup.string().required("Must confirm password")
.oneOf([Yup.ref(passwordField)], "Passwords must match");

export const SignupSchema = Yup.object().shape({
    firstName: stringRequired("First name"),
    lastName: stringRequired("Last name"),
    email,
    password,
    confirmPassword: confirmPassword("password"),
    termsOfService: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions"),
    recaptchaToken: stringRequired("reCaptcha").nullable()
});

export const SigninSchema = Yup.object().shape({
    email,
    password
});

export const ResetPasswordSchema = Yup.object().shape({
    newPassword1: password,
    newPassword2: confirmPassword("newPassword1")
});

export const ForgotPasswordSchema = Yup.object().shape({
    email
});

export const AddBusinessSchema = Yup.object().shape({
    business_name: stringRequired("Business name"),
    description: stringRequired("Business description"),
    staff_size: stringRequired("Staff size"),
    industry: stringRequired("Industry"),
    business_type: stringRequired("Business type"),
    address: stringRequired("Address"),
    city: stringRequired("City"),
    state: stringRequired("State"),
    country: stringRequired("Country"),
});

export const EditBusinessSchema = AddBusinessSchema;

export const AddRolesSchema = Yup.object().shape({
    member_email: email,
    member_role: stringRequired("Role"),
});

export const EditProfileSchema = Yup.object().shape({
    first_name: stringRequired("First name"),
    last_name: stringRequired("Last name"),
    email,
    country_code: Yup.string().nullable(),
    phone_number: Yup.string().matches(phoneRegex, "Invalid phone number").nullable(),
    address: Yup.string().nullable(),
    city: Yup.string().nullable(),
    state: Yup.string().nullable(),
    country: Yup.string().nullable(),
    gender: Yup.string().oneOf(genders.map(g=>g.value), "Incorrect gender"),
    date_of_birth: Yup.date().nullable(),
});

export const ChangePasswordSchema = Yup.object().shape({
    new_password1: password,
    new_password2: confirmPassword("new_password1")
});
