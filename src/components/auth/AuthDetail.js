import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function AuthDetail() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    // once component unmount, we need to remove the listener, let's return inside useEffect does, so we dont need to like listen whether or not if the component is not there, user signed in or not. let's return that listen.. ??
    return () => {
        listen();
    }
  }, []);

  const userSignOut = () => {
    signOut(auth).then(() => {
        console.log('sign out successful')
    }).catch(error => console.log(error));

  }
  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed out</p>
      )}
    </div>
  );
}

export default AuthDetail;
