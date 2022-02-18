import React from "react";
import classes from "../../Styles/Organization/Organization.module.css";
import Input from "../Auth/Input";
import Button from "../Button/Button";
import Select from "../Auth/Select";
import { Formik, Form } from "formik";
import { CredentialSchema } from "../Schema/schema";
const OrganizationForm = () => {
  return (
    <Formik
      initialValues={{ orgId: "", Username: "", Password: "", IpAddress: "" }}
      validationSchema={CredentialSchema}
      onSubmit={(values) => {
        console.log(values);
      }}>
      {(formik) => (
        <div className={classes.container}>
          <div className={classes.forms}>
            <h1 className={classes["form-title"]}>Add Credetials</h1>
            <Form>
              <Select name='orgId' label='Organization Name' data={[]} />
              <Input name='Username' type='text' label='Username' id='Username' formik={formik} />
              <Input name='Password' type='password' label='Password' id='Password' formik={formik} />
              <Input name='IpAddress' type='text' label='IpAddress' id='IpAddress' formik={formik} />
              <Button>Submit</Button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};
export default OrganizationForm;
