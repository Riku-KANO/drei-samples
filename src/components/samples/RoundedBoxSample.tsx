import { OrbitControls, RoundedBox } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ChangeEvent, KeyboardEvent, useState } from "react";
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
const DEFAULT_RADIUS = 1;
const MIN_RADIUS = 0.5;
const MAX_RADIUS = 4;

export const RoundedBoxSample = () => {
  const [height, setHeight] = useState<number>(DEFAULT_HEIGHT);
  const [width, setWidth] = useState<number>(DEFAULT_WIDTH);
  const [depth, setDepth] = useState<number>(DEFAULT_DEPTH);
  const [radius, setRadius] = useState<number>(DEFAULT_RADIUS);

  const handleChangeHeight = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const nextHeight = clamp(Number(e.target.value), MIN_HEIGHT, MAX_HEIGHT);
    setHeight(nextHeight);
    e.target.value = height.toString();
  };

  const handleChangeWidth = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const nextWidth = clamp(Number(e.target.value), MIN_WIDTH, MAX_WIDTH);
    setWidth(nextWidth);
    e.target.value = width.toString();
  };

  const handleChangeDepth = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const nextWidth = clamp(Number(e.target.value), MIN_DEPTH, MAX_DEPTH);
    setDepth(nextWidth);
    e.target.value = depth.toString();
  };

  const handleChangeRadius = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const nextRadius = clamp(Number(e.target.value), MIN_RADIUS, MAX_RADIUS);
    setRadius(nextRadius);
    e.target.value = radius.toString();
  }

  return (
    <div className="flex h-screen">
      <Canvas className="">
        <color attach="background" args={["#eeeeee"]} />

        <ambientLight intensity={3} />
        <OrbitControls />
        <RoundedBox
          args={[height, width, depth]}
          radius={radius}
          smoothness={10}
          bevelSegments={40}
          steps={10}
          creaseAngle={10}
        >
          <meshStandardMaterial color="#aaaaFF" />

        </RoundedBox>
      </Canvas >
      <div className="w-400">
        <h2>GUISPACE</h2>
        <div>
          <div>
            <label htmlFor="">Height: </label>
            <input
              type="number"
              min={MIN_HEIGHT}
              max={MAX_HEIGHT}
              defaultValue={height}
              onChange={handleChangeHeight}
            />
          </div>
          <div>
            <label htmlFor="">Width: </label>
            <input
              type="number"
              min={MIN_WIDTH}
              max={MAX_HEIGHT}
              defaultValue={width}
              onChange={handleChangeWidth}
            />
          </div>
          <div>
            <label htmlFor="">Depth: </label>
            <input
              type="number"
              min={MIN_DEPTH}
              max={MAX_DEPTH}
              defaultValue={depth}
              onChange={handleChangeDepth}
            />
          </div>
          <div>
            <label htmlFor="">Radius: </label>
            <input
              type="text"
              defaultValue={radius}
              onChange={handleChangeRadius}
            />
          </div>
        </div>
      </div>
    </div>
  );
};