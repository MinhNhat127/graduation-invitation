import { useState } from "react";

import Envelope from "./components/Envelope";
import InvitationCard from "./components/InvitationCard.jsx";
import Confetti from "./components/Confetti.jsx";
import InvitationScene from "./components/InvitationScene.jsx";


function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
    <Confetti />
      <InvitationScene />

      <div className="relative z-10 flex h-full items-center justify-center">
        {!opened ? (
          <Envelope onOpen={() => setOpened(true)} />
        ) : (
          <InvitationCard />
        )}
      </div>
    </div>
  );
}

export default App;