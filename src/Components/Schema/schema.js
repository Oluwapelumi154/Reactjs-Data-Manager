import * as Yup from "yup";
const AuthSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Invalid Email"),
  password: Yup.string().required("Password is required").min(8),
});

const CredentialSchema = Yup.object({
  Username: Yup.string().required("Username is required"),
  Password: Yup.string().required("Password is required").min(8),
  IpAddress: Yup.string().required("IpAddress is required"),
  orgId: Yup.string().required("Name a is required field"),
});

export { AuthSchema, CredentialSchema };
