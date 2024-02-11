export const FormatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "2-digit" };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    const formattedDate = formatter.format(date);
    return formattedDate;
  };


export const EmailValidation = (email)=>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const passwordValidation = (password)=>{

  const upperCaseRegex = /[A-Z]/; // Regular expression to match uppercase letters
  const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/; // Regular expression to match special characters

  if(password.length<=7) return {value:false,error:'length must be greater than 8'}
  if(!upperCaseRegex.test(password)) return {value:false,error:'Must contain an uppercase character'}

  if(!specialCharRegex.test(password)) return {value:false,error:'Must contain a special character'}

  return {value:true,error:null}

}


export const debounce = (callbackFn, delay) => {
  let timeout
  return (...args)=>{
    clearTimeout(timeout)
   timeout = setTimeout(()=>{
    callbackFn(...args)
    },delay)
  }
  };
