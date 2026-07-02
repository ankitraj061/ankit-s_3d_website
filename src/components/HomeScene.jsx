"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { HomeInfo, Loader } from "@/components";
import { soundoff, soundon } from "@/assets/icons";
import { Bird, Island, Plane, Sky } from "@/models";
import SkillsCloud from "@/components/SkillsCloud";

const sakura = "/sakura.mp3";

const adjustBiplaneForScreenSize = () => {
  let screenScale, screenPosition;

  if (window.innerWidth < 768) {
    screenScale = [1.5, 1.5, 1.5];
    screenPosition = [0, -1.5, 0];
  } else {
    screenScale = [3, 3, 3];
    screenPosition = [0, -4, -4];
  }

  return [screenScale, screenPosition];
};

const adjustIslandForScreenSize = () => {
  let screenScale, screenPosition;

  if (window.innerWidth < 768) {
    screenScale = [0.9, 0.9, 0.9];
    screenPosition = [0, -6.5, -43.4];
  } else {
    screenScale = [1, 1, 1];
    screenPosition = [0, -6.5, -43.4];
  }

  return [screenScale, screenPosition];
};

const HomeScene = () => {
  const audioRef = useRef(null);
  if (audioRef.current === null && typeof window !== "undefined") {
    audioRef.current = new Audio(sakura);
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
  }

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <>
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>

      {/* <div className='hidden sm:flex absolute bottom-4 right-4 z-10 flex-col items-center w-56 h-48 lg:w-64 lg:h-56 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-lg overflow-hidden'>
        <Link
          href='/about'
          className='mt-2 flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors'
        >
          My Skills
          <ArrowUpRight className='w-3.5 h-3.5' />
        </Link>
        <div className='flex-1 w-full'>
          <SkillsCloud />
        </div>
      </div> */}
    </section>
    </>
  );
};

export default HomeScene;
