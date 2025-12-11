"use client";

import Snowfall from "react-snowfall";

export default function SnowfallWrapper() {
  return (
    <Snowfall
      snowflakeCount={120}
      color="white"
      radius={[0.5, 2.5]}
      speed={[0.5, 2.5]}
      wind={[-0.5, 1]}
    />
  );
}
