//conditions to check if the data submitted in the form is present and valid
export function conditionals(formInputs) {
  const namePattern = /^[\p{L} .'-]+$/u;
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,}$/;

  for (const key in formInputs) {
    formInputs[key] = formInputs[key].trim();
  }

  let warnings = {};

  if (
    !formInputs.firstName ||
    formInputs.firstName.split(/\s+/).length > 1 ||
    !namePattern.test(formInputs.firstName) ||
    formInputs.firstName.length > 25
  ) {
    warnings.firstName = "Please enter your first name.";
  }

  if (
    !formInputs.lastName ||
    !namePattern.test(formInputs.lastName) ||
    formInputs.lastName.length > 25
  ) {
    warnings.lastName = "Please enter your last name.";
  }

  if (formInputs.companyName.length > 25) {
    warnings.companyName =
      "Please enter a name with a maximum of 25 characters.";
  }

  if (!formInputs.email || !emailPattern.test(formInputs.email)) {
    warnings.email = "Please enter a valid email.";
  }

  if (!formInputs.message || formInputs.message.length > 1000) {
    warnings.message = "Do not exceed 1000 characters.";
  }

  return warnings;
}
