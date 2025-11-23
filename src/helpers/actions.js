import emailjs from "@emailjs/browser";
import { conditionals } from "./conditionals";

//send the email to the email of Nature's Home
export async function sendEmail({ request }) {
  //receives the data from the form and processes the promise
  const data = await request.formData();

  //object with the data received in the form
  const eventData = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    companyName: data.get("companyName"),
    email: data.get("email"),
    message: data.get("message"),
  };

  //checks with the conditions in the conditionals.js file if the data is ok
  const warnings = conditionals(eventData);

  //if there are warnings to pass to the user, they are passed back
  if (Object.keys(warnings).length > 0) {
    warnings.warning = true;
    return warnings;
  }

  //send the email with the data collected from the form
  try {
    await emailjs.send("service_w59ek7r", "template_4qnfkrd", {
      name: `${eventData.firstName} ${eventData.lastName}`,
      email: eventData.email,
    });
  } catch (error) {
    console.log(error)
    return error;
  }

  //send the email with the data collected from the form
  const status = await emailjs.send("service_w59ek7r", "template_7hkw8qs", {
    name: `${eventData.firstName} ${eventData.lastName}`,
    company: eventData.companyName,
    email: eventData.email,
    message: eventData.message,
  });
  console.log(status)
  return status;
}
