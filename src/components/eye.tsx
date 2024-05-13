import { useEffect, useState } from "react";
import "../styles/eyes.css";

interface EyeProps {
  x: number;
  y: number;
  eyeClassName?: string;
}

function Pupil(eye: EyeProps) {
  const [pupilPos, setPupilPos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const anchorX = eye.x;
      const anchorY = eye.y;

      const dx = mouseX - anchorX;
      const dy = mouseY - anchorY;
      // console.log(eye.x, eye.y);
      setPupilPos({
        x: (Math.sqrt(Math.abs(dx)) * Math.sign(dx)) / 2,
        y: (Math.sqrt(Math.abs(dy)) * Math.sign(dy)) / 2,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className={eye.eyeClassName + " transform-center"}
      style={{
        position: "absolute",
        left: pupilPos.x + eye.x,
        top: pupilPos.y + eye.y,
      }}
    />
  );
}

function Eyeball(eye: EyeProps) {
  return (
    <div
      style={{
        position: "absolute",
        left: eye.x,
        top: eye.y,
      }}
      className="transform-center"
    >
      <span className="dot"></span>
    </div>
  );
}

function Eye(eye: EyeProps): any {
  const x = eye.x;
  const y = eye.y;
  return (
    <div>
      <Eyeball x={x} y={y}></Eyeball>
      <Pupil x={x} y={y} eyeClassName="pupil" />
      <Eyeball x={x + 40} y={y}></Eyeball>
      <Pupil x={x + 40} y={y} eyeClassName="pupil" />
    </div>
  );
}

export default Eye;
