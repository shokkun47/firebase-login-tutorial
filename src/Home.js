import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, provider } from './firebase';
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
    const [user] = useAuthState(auth);

  return (
    <div>
        {user ? (
            <>
                <UserInfo />
                <SignOutButton />
            </>
        ) : (
      <SignInButton />
        )}
    </div>
  );
}

export default Home


function SignInButton() {
    const signInWithGoogle = () => {
        //firebaseを使ってグーグルでサインインする
        signInWithPopup(auth, provider)
    };

    return (
        <button onClick={signInWithGoogle}>
            <p>グーグルでサインイン</p>
        </button>
    )
};

function SignOutButton() {
    return (
        <button onClick={() => auth.signOut()}>
            <p>サインアウト</p>
        </button>
    )
};

function UserInfo() {
  return <div>
    <img src={auth.currentUser.photoURL} alt=""></img>
    <p>{auth.currentUser.displayName}</p>
  </div>
}
