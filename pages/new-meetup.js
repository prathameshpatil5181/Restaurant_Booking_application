import NewMeetupForm from "@/components/meetups/NewMeetupForm"



const NewMeetup = () => {


    const addRestoHandler = (resto)=>{
        console.log(resto);
    }


  return (
    <div>
      <NewMeetupForm onAddMeetup={addRestoHandler}/>
    </div>
  )
}

export default NewMeetup
