const validation = (formValidation, setValid) => {
  if (formValidation.firstName === "") {
    setValid((prevState) => {
      return { ...prevState, fNameValid: false };
    });
  } else {
    setValid((prevState) => {
      return { ...prevState, fNameValid: true };
    });
  }

  if (formValidation.lastName === "") {
    setValid((prevState) => {
      return { ...prevState, lNameValid: false };
    });
  } else {
    setValid((prevState) => {
      return { ...prevState, lNameValid: true };
    });
  }
};

export default validation;
