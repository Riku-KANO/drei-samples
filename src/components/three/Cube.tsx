import { RoundedBox } from "@react-three/drei";
import { ForwardRefComponent, NamedArrayTuple } from "@react-three/drei/helpers/ts-utils";
import { Node } from "@react-three/fiber";
import React, { useLayoutEffect, useMemo, useRef } from "react";
import { Mesh } from "three";
import { RoundedBoxGeometry, toCreasedNormals } from "three-stdlib";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      roundedBoxGeometry: Node<any, any>;
    }
  }
}



type Props = {
  width: number,
  height: number,
  depth: number,
  creaseAngle: number;
}


export const RoundedCube: ForwardRefComponent<Props, Mesh> = React.forwardRef<Mesh, Props>(
  function RoundedCube(
    {
      width,
      height,
      depth,
      creaseAngle,
      ...props
    },
    ref
  ) {
    const geomRef = useRef<RoundedBoxGeometry>(null!);

    const params = useMemo(() => (
      {
        width,
        height,
        depth,
        creaseAngle
      }
    ),[width, height, depth, creaseAngle]);

    useLayoutEffect(() => {
      if (geomRef.current) {
        geomRef.current.center()
        toCreasedNormals(geomRef.current, creaseAngle)
      }
    }, [geomRef]);

    const args = [width, height, depth];

    return (
      <mesh ref={ref} {...props}>
        <roundedBoxGeometry
          ref={geomRef}
          args={[args, params]}
        />
      </mesh>
    );

  }
);