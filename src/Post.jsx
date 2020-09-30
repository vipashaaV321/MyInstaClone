// // import React from 'react'
// // import './post.css';
// //  const Post = (props) => {
// //    const img=`https://ui-avatars.com/api/?name=${props.username}`;
// //     return (

// // <div class="container my-5">
// //   <div class="row">
// //     <div class="col-md-8 col-lg-6 mx-auto">



// //       <section>

// //         <div class="list-group list-group-flush z-depth-1 rounded">
// //           <div class="list-group-item active d-flex justify-content-start align-items-center py-3">
// //             <img src={img} class="rounded-circle z-depth-0" width="50" alt="avatar image"/>
// //             <div class="d-flex flex-column pl-3 list-group-item active">
// //               <p class="font-weight-normal mb-0 list-group-item active">{props.username}</p>
              
// //             </div>
// //           </div>
// //           <img src={props.imageUrl} alt="a"/>
// //           <a href="#!" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"><span>❤️ </span> {props.caption}
            
// //           </a>
// //         </div>

// //       </section>
    


// //     </div>
// //   </div>
// // </div>
// //     )
// // }
// // export default Post;
// import React, { useState, useEffect, forwardRef } from "react";
// import "./post.css";
// import Avatar from "@material-ui/core/Avatar";
// import { db } from "./firebase";
// import firebase from "firebase";

// const Post = forwardRef(
//   ({ user, username, postId, imageUrl, caption }, ref) => {
//     const [comments, setComments] = useState([]);
//     const [comment, setComment] = useState("");
// const img=`https://ui-avatars.com/api/?name=${username}`
//     useEffect(() => {
//       let unsubscribe;
//       if (postId) {
//         unsubscribe = db
//           .collection("posts")
//           .doc(postId)
//           .collection("comments")
//           .onSnapshot((snapshot) => {
//             setComments(snapshot.docs.map((doc) => doc.data()));
//           });
//       }

//       return () => {
//         unsubscribe();
//       };
//     }, [postId]);

//     const postComment = (e) => {
//       e.preventDefault();

//       db.collection("posts").doc(postId).collection("comments").add({
//         text: comment,
//         username: user.displayName,
//       });
//       setComment("");
//     };

//     return (
//       <div class="container my-5">
//   <div class="row">
//      <div class="col-md-8 col-lg-6 mx-auto">



//        <section>

//          <div class="list-group list-group-flush z-depth-1 rounded">           <div class="list-group-item active d-flex justify-content-start align-items-center py-3">
//            <img src={img} class="rounded-circle z-depth-0" width="50" alt="avatar image"/>
//              <div class="d-flex flex-column pl-3 list-group-item active">
//                <p class="font-weight-normal mb-0 list-group-item active">{username}</p>
              
//              </div>
//            </div>
//            <img src={imageUrl} alt="a"/>
//            <a href="#!" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"><span>❤️ </span> {caption}
            
//            </a>
// <a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
// {comments.map((comment) => (
//             <p>
//               <b>{comment.username}</b> {comment.text}
//             </p>
//           ))}
// </a>
// <a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">

// {user && (
//           <form className="post__commentBox">
//             <input
//               className="post__input"
//               type="text"
//               placeholder="Add a comment..."
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//             />
//             <button
//               disabled={!comment}
//               className="post__button"
//               type="submit"
//               onClick={postComment}
//             >
//               Post
//             </button>
//           </form>
//         )}
//         </a>
//         </div>

//       </section>
//       </div>
//       </div>
//       </div>
     
//     );
//   }
// );

// export default Post;
import React, { useState, useEffect, forwardRef } from "react";
import "./post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "./firebase";

const Post = forwardRef(
  ({ user, username, postId, imageUrl, caption }, ref) => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    useEffect(() => {
      let unsubscribe;
      if (postId) {
        unsubscribe = db
          .collection("posts")
          .doc(postId)
          .collection("comments")
          .onSnapshot((snapshot) => {
            setComments(snapshot.docs.map((doc) => doc.data()));
          });
      }

      return () => {
        unsubscribe();
      };
    }, [postId]);

    const postComment = (e) => {
      e.preventDefault();

      db.collection("posts").doc(postId).collection("comments").add({
        text: comment,
        username: user.displayName,
      });
      setComment("");
    };

    return (
      <>
      <div className="post" ref={ref}>
        <div className="post__header">
          <Avatar
            className="post__avatar"
            alt={username}
            src="/static/images/avatar/1.jpg"
          />
          <h3>{username}</h3>
        </div>

        <img className="post__image" src={imageUrl} alt="post" />
        <h5 className="post__text">
     
          <span className="post__caption"> 💝 {caption}</span>
        </h5>

        <div className="post__comments">
          {comments.map((comment) => (
            <p>
              <b>{comment.username}</b> {comment.text}
            </p>
          ))}
        </div>

        {user && (
          <form className="post__commentBox">
            <input
              className="post__input"
              type="text"
              placeholder="Add a comment..."
              value={comment}
              id="outlined-size-normal"
          
          variant="outlined"
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              disabled={!comment}
              className="post__button"
              type="submit"
              onClick={postComment}
            >
              Post
            </button>
          </form>
        )}
      </div>
      <br/>
      </>
    );
  }
);

export default Post;
