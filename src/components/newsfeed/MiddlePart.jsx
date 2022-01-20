import { Container, Row, Col } from "react-bootstrap";
import Post from "./Post";
import TopMiddle from "./TopMiddle";

const MiddlePart = (props) => {
  let images=[]
  return (
    <Container className="rounded-lg ">
      <TopMiddle 
      profilePicture={props.profilePicture} 
      submitNewPost={props.submitNewPost}
      
      />
    

{
  props.posts.filter (p=>p.user ).map(p=>
  
  (
    <Post 
    postDescription={p.text}
     key={p._id}
      postPhoto={p.user.image}
      name={p.user.name}
      surname={p.user.surname}
      title={p.user.title}
      
      />
  )
  
  )
}



{/* 
      {props.posts.map(p => (
        <>
      
{
  console.log(p.user.image.hasOwnProperty("image") === false || p.user.image === null ? "https://images.unsplash.com/photo-1642570517818-99c0fd6f0349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
: "inside post:" + p.user.image
)
}

{
  p.filter(i => i.user || i.user.image ).map(console.log("ok"))
} */}


{/* {
        p.user.image === undefined ?
         "https://images.unsplash.com/photo-1642570517818-99c0fd6f0349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
         : console.log("inside post:" + p.user.image)
        }
        <Post postDescription={p.text}   />
        </>
        
              ))
      } */}

      
    </Container>
  );
};

export default MiddlePart;
