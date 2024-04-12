import { Canvas } from "@react-three/fiber";
import { RoundedCube } from "../three/Cube";
import { OrbitControls } from "@react-three/drei";

export const MyRoundedBox = () => {
  return (
    <div className="flex h-screen">
      <Canvas className="">
        <color attach="background" args={["#eeeeee"]} />

        <ambientLight intensity={3} />
        <OrbitControls />
        <RoundedCube
          width={1}
          height={1}
          depth={1}
          creaseAngle={0.1}
        />
      </Canvas >
      <div className="w-400">
        <h2>GUISPACE</h2>
      </div>
    </div>
  );
};