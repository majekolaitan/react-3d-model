import { useState, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import Earth from "../public/Earth";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Canvas>
        <ambientLight intensity={0.8} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <Environment preset="sunset" />
        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.3}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
      </Canvas>
    </>
  );
}

export default App;
