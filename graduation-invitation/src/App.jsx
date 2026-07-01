import { useState } from "react";

import Background from "./components/Background";
import Envelope from "./components/Envelope";
import InvitationCard from "./components/InvitationCard.jsx";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Background />

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