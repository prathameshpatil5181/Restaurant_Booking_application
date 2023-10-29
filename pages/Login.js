import LoginPage from "@/components/LoginPage/LoginPage";
import NewMeetupForm from "@/components/meetups/NewMeetupForm"
import { useRouter } from "next/router";


const Login = () => {

  const router = useRouter();

    const addRestoHandler = async  (resto)=>{
       const response = await fetch('/api/new-meetup',{
        method:"POST",
        body:JSON.stringify(resto),
        headers:{
          'Content-Type':'application/json'
        }
       });

       const data = await response.json();
       console.log(data);

       router.push('/');

    }


  return (
    <div>
      <LoginPage/>
    </div>
  )
}

export default Login;
