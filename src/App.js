// import React, { useState, useEffect } from 'react';
// import logo from './logo.png';
// import './App.css';
// import Post from './Post';
// import { db, auth } from './firebase';
// import ImageUpload from './ImageUpload';
// import Modal from '@material-ui/core/Modal';
// import Alert from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//   Button,
//   TextField,
//   Grid,
// } from "@material-ui/core";
// // import ImageUpload from './ImageUpload';


// function getModalStyle() {
//   const top = 50;
//   const left = 50;

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }
// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));
// function App() {
//   const classes = useStyles();
//   const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const [userName, setuserName] = React.useState('');
//   const [user, setUser] = React.useState(null);
// const [OpenSignin,setOpenSignin]=useState(false);
//   const [posts, setPosts] = useState([
//     // {userName:"Vipasha",caption:"Let's Rock Together",imgUrl:"https://picsum.photos/200/300"},
//     // {userName:"Vipasha",caption:"Let's Rock Together",imgUrl:"https://picsum.photos/200/300"},

//   ]);
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         //logged in
//         console.log(authUser)
//         setUser(authUser)
//         if (authUser.displayName) {
//           // dont update username
//         } else {
//           return authUser.updateProfile({
//             displayName: userName,
//           });
//         }
//       }
//       else {
//         //logged out
//         setUser(null)
//       }
//     })
//     return () => {
//       //cleanUp
//       unsubscribe();
//     }
//   }, [user, userName])
 
//   useEffect(() => {
//     db.collection('posts').onSnapshot(snapshot => {
//       setPosts(snapshot.docs.map(doc =>
//         ({
//           id: doc.id,
//           post: doc.data()
//         })
//       ));
//     })
//   }, [])
//   const signup = (event) => {
//     event.preventDefault();
//     auth.createUserWithEmailAndPassword(email, password)
//       .catch((error) => alert(error.message))
//   }
//   const signin=(event)=>{
//     event.preventDefault();
//     auth.signInWithEmailAndPassword(email,password)
//     .catch((error)=>alert(error.message))
//     setOpenSignin(false)
//   }
//   return (
//     <div className="App">
    
//       {/* <ImageUpload username={userName}/> */}
     
//       <Modal
//         open={open}
//         onClose={() => setOpen(false)}
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//       >
//         <div style={modalStyle} className={classes.paper}>
//           <center>
//             <img src={logo} className="App-Header-img" alt="logo" />
//             <form>
//               <Grid container direction="column" spacing={2}>
//                 <Grid item>

//                   <TextField
//                     type="email"
//                     placeholder="Email"
//                     fullWidth
//                     name="email"
//                     variant="standard"
//                     label="Email"
//                     onChange={(e) => setEmail(e.target.value)}
//                     value={email}
//                     required
//                     autoFocus

//                   />
//                 </Grid>
//                 <Grid item>

//                   <TextField
//                     type="text"
//                     placeholder="username"
//                     fullWidth
//                     name="username"
//                     variant="standard"
//                     label="UserName"
//                     required
//                     autoFocus
//                     onChange={(e) => setuserName(e.target.value)}
//                     value={userName}

//                   />
//                 </Grid>
//                 <Grid item>
//                   <TextField
//                     type="password"
//                     placeholder="Password"
//                     fullWidth
//                     name="password"
//                     variant="standard"
//                     label="Password"
//                     onChange={(e) => setPassword(e.target.value)}
//                     value={password}
//                     required
//                   />
//                 </Grid>
//                 <Grid item>
//                   <Button
//                     variant="contained"
//                     color="ternary"
//                     type="submit"
//                     className="button-block"
//                     onClick={signup}
//                   >
//                     Submit
// </Button>
//                 </Grid>
//               </Grid>
//             </form>
//           </center>
//         </div>
//       </Modal>
//       <Modal
//         open={OpenSignin}
//         onClose={() => setOpenSignin(false)}
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//       >
//         <div style={modalStyle} className={classes.paper}>
//         <center>
//             <img src={logo} className="App-Header-img" alt="logo" />
//             <form>
//               <Grid container direction="column" spacing={2}>
//                 <Grid item>

//                   <TextField
//                     type="email"
//                     placeholder="Email"
//                     fullWidth
//                     name="email"
//                     variant="standard"
//                     label="Email"
//                     onChange={(e) => setEmail(e.target.value)}
//                     value={email}
//                     required
//                     autoFocus

//                   />
//                 </Grid>
//                 <Grid item>

                  
//                 </Grid>
//                 <Grid item>
//                   <TextField
//                     type="password"
//                     placeholder="Password"
//                     fullWidth
//                     name="password"
//                     variant="standard"
//                     label="Password"
//                     onChange={(e) => setPassword(e.target.value)}
//                     value={password}
//                     required
//                   />
//                 </Grid>
//                 <Grid item>
//                   <Button
//                     variant="contained"
//                     color="ternary"
//                     type="submit"
//                     className="button-block"
//                     onClick={signin}
//                   >
//                     Submit
// </Button>
//                 </Grid>
//               </Grid>
//             </form>
//           </center>
//           </div>
//           </Modal>
//       <header className="App-header">
//         <img src={logo} className="App-Header-img" alt="logo" />
//         RectaStore
//         {user ? (
//           <Button variant="outlined" color="secondary" onClick={() => auth.signOut()} style={{ float: "right", justifyContent: "center", marginTop: "22px", marginRight: "2px" }}>
//             LOGOUT
//           </Button>
//         ) : (
//             <div style={{ float: "right" }}>
//               <Button variant="outlined" color="secondary" onClick={() => setOpen(true)} >
//                 SIGNUP
//          </Button>
//               <Button variant="outlined" color="secondary" onClick={() => setOpenSignin(true)} >
//                 SIGNIN
//          </Button>
//             </div>
//           )}

//       </header>
//       {
//         posts.map(({ id, post }) => (
//           <Post 
//           user={user}
//                 key={id}
//                 postId={id}
//                 username={post.username}
//                 caption={post.caption}
//                 imageUrl={post.imageUrl}
//           />
//         ))
//       }
//   {user? (
//       <ImageUpload username={user}/>
//       ):(
//         <Alert severity="error">Login to upload a post</Alert>

//       )}
     
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import logo from './logo.png'
import ImageUpload from "./ImageUpload";
import { db, auth } from "./firebase";
import { Button, Avatar, makeStyles, Modal,  Grid,Input } from "@material-ui/core";


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    height: "300px",
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height: 200,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in...
        console.log(authUser);
        setUser(authUser);

        if (authUser.displayName) {
          // dont update username
        } else {
          return authUser.updateProfile({
            displayName: username,
          });
        }
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user, username]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })))
      );
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setOpen(false);
    alert("Login Succesfully")
  };

  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setRegisterOpen(false);
    alert("SignUp Succesfully")

  };

  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__login">
            <center>
              <img
                className="app__headerImage"
                src={logo}
                height="100"
                width="100"
                alt=""
              />
            </center>

            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{marginBottom:"2px"}}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{marginBottom:"2px"}}
            />
            <Button onClick={handleLogin} variant="contained" color="secondary" className="mt-2">Login</Button>
          </form>
        </div>
      </Modal>

      <Modal open={registerOpen} onClose={() => setRegisterOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <Grid>
          <form className="app__login">
            <center>
              <img
                className="app__headerImage"
                src={logo}
                height="100"
                width="100"
                alt=""
              />
            </center>
            
            <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{marginBottom:"2px"}}
            />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{marginBottom:"2px"}}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{marginBottom:"2px"}}
            />
            <Button onClick={handleRegister} variant="contained" color="secondary" className="mt-2">Register</Button>
          </form>
          </Grid>
        </div>
      </Modal>
      <div className="app__header">
        <img
          className="app__headerImage"
          src={logo}
          width="70"
          height="70"
          alt=""
        />
        {user?.displayName ? (
          <div className="app__headerRight">
            <Button onClick={() => auth.signOut()} variant="contained" color="secondary" className="mr-2">Logout</Button>
            <Avatar
              className="app__headerAvatar"
              alt={user.displayName}
              src="/static/images/avatar/1.jpg"
            />
          </div>
        ) : (
          <form className="app__loginHome">
            <Button variant="contained" color="secondary" onClick={() => setOpen(true)} className="mr-2">
            Login
</Button>
        
            <Button onClick={() => setRegisterOpen(true)} variant="contained" color="secondary">Sign Up</Button>
          </form>
        )}
      </div>

      <div className="app__posts">
        <div className="app__postsLeft">
          {/* <FlipMove> */}
            {posts.map(({ id, post }) => (
              <Post
                user={user}
                key={id}
                postId={id}
                username={post.username}
                caption={post.caption}
                imageUrl={post.imageUrl}
              />
            ))}
          {/* </FlipMove> */}
          <br/>
      <br/>
      <br/>
      <br/>
        </div>
 
      </div>

      {user?.displayName ? (
        <div className="app__upload">
          <ImageUpload username={user.displayName} />
        </div>
      ) : (
        <center>
        <div className="alert alert-danger m-10 col-6" role="alert">
 
          <h3>Please SignIn to Explore More and Do Post!</h3>
      
</div>
</center>
       
      )}
    </div>
  );
}

export default App;
