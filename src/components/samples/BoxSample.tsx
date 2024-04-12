import { Box, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ChangeEvent, useState } from "react";
import { clamp } from "../../util/math";

const DEFAULT_HEIGHT = 4;
const MIN_HEIGHT = 1;
const MAX_HEIGHT = 10;
const DEFAULT_WIDTH = 4;
const MIN_WIDTH = 1;
const MAX_WIDTH = 10;
const DEFAULT_DEPTH = 4;
const MIN_DEPTH = 1;
const MAX_DEPTH = 10;

export const BoxSample = () => {
  const [height, setHeight] = useState<number>(DEFAULT_HEIGHT);
  const [width, setWidth] = useState<number>(DEFAULT_WIDTH);
  const [depth, setDepth] = useState<number>(DEFAULT_DEPTH);

  const handleChangeHeight = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const nextHeight = clamp(Number(e.target.value), MIN_HEIGHT, MAX_HEIGHT);
    setHeight(nextHeight);
    e.target.value = nextHeight.toString();
  }

  const handleChangeWidth = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const nextWidth = clamp(Number(e.target.value), MIN_WIDTH, MAX_WIDTH);
    setHeight(nextWidth);
    e.target.value = nextWidth.toString();
  }

  const handleChangeDepth = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const nextDepth = clamp(Number(e.target.value), MIN_DEPTH, MAX_DEPTH);
    setHeight(nextDepth);
    e.target.value = nextDepth.toString();
  }

  return (
    <div className="flex h-screen">
      <Canvas>
        <color attach="background" args={['#eeeeee']} />
        <ambientLight intensity={0.4} />
        <Box args={[height, width, depth]}>
          <meshStandardMaterial color="#000" />
        </Box>
        <OrbitControls />
      </Canvas>
      <div className="w-1000">
        <h2>GUI SPACE</h2>
        <div>
          <label htmlFor="">HEIGHT: </label>
          <input
            type="number"
            defaultValue={height}
          />
        </div>
        <div>
          <label htmlFor="">WIDTH: </label>
          <input
            type="number"
            defaultValue={width}
          />
        </div>
        <div>
          <label htmlFor="">DEPTH: </label>
          <input
            type="number"
            defaultValue={depth}
          />
        </div>
      </div>
    </div>
  );
};