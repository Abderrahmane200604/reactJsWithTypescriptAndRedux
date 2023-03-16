import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPost,deletePost,findById,updatePost} from "../redux/PostsSlice";


const Posts=()=>{
   const [titre,setTitre]=useState('');
   const [desc,setDesc]=useState('');
   const[post,setPost] = useState([]);
   const[update,setUpdate]=useState(false);
   const[id,setId]=useState(0);
   const state=useSelector((state)=>state.posts.items);

   const dispatch=useDispatch();
   const titleChange=(event)=>{
        setTitre(event.target.value);
    };
    const descChange=(event)=>{
        setDesc(event.target.value);
    };
    return(
       <div>
           <div className="form">
               <input type="text" value={titre} placeholder="enter Post Title" onChange={titleChange}/>
               <input type="text" value={desc} placeholder="enter Post Desc" onChange={descChange}/>
               {update===false?( <button onClick={()=>{
                   dispatch(addPost({id:state.length,title:titre,description:desc}));
                   setDesc("");setTitre("");


               }}>Add Post</button>):( <button onClick={()=>{
                   console.log(id);dispatch(updatePost({id:id,title:titre,description:desc}));

               }}>Update Post</button>)}

           </div>
           <div className="posts">
               {state.length>0?state.map(p=>(     <div key={p.id} className="post">
                   <h2>{p.title}</h2>
                   <p>{p.description}</p>
                   <button onClick={()=>{setTitre(p.title);setDesc(p.description); setUpdate(true);
                       setId(p.id);}}>Edit</button>

                   <button onClick={()=>dispatch(deletePost(p.id))}>Delete</button>
               </div>)):'Empty DataBase'}

           </div>
       </div>

    );

}
export default Posts;