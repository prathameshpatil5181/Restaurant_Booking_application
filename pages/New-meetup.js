import NewMeetupForm from "@/components/meetups/NewMeetupForm"
import { useRouter } from "next/router";


const NewMeetup = () => {

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
      <NewMeetupForm onAddMeetup={addRestoHandler}/>
    </div>
  )
}

export default NewMeetup
