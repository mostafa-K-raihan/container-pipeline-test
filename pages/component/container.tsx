import dynamic from "next/dynamic";
import { useState, useRef, useEffect } from "react";
import useHostChannel from "@/hooks/useHostChannel";
import { Color, Config } from "@/helpers/types";

const ColorSummary = dynamic(() => import("@/components/ColorSummary"), {
  loading: () => <p>Loading...</p>,
});

export default function Component() {
  return <div>Hello from the other side</div>;
}
