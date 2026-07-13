// Entry point for esbuild bundling — exposes exportToSvg on window.ExcalidrawLib
import { exportToSvg } from "@excalidraw/excalidraw";
window.ExcalidrawLib = { exportToSvg };
