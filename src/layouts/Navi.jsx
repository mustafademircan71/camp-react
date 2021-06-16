import React,{useState} from "react";
import CartSummary from "./CartSummary";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";

export default function Navi() {
  const [isAutenticated, setIsAutenticated] = useState(true)
  const history= useHistory()
  function handleSignOut(params) {
    setIsAutenticated(false)
    history.push("/")
  }
  function handleSignIn(params) {
    setIsAutenticated(true)
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary/>
            {isAutenticated?<SignedIn signOut={handleSignOut} bisey="1"/>:<SignedOut signIn={handleSignIn}/>}
            
            
            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
