'use client';
import { useState, useEffect } from 'react';
import computingEras from '../computingeras.json'; // Importing your JSON data
import {Button, ButtonGroup} from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

interface OperationTimes {
  [key: string]: string;
}

export default function HistoryPage() {
  const [animationSpeed, setAnimationSpeed] = useState<number>(0.01); // Default animation speed
  const [operationTimes, setOperationTimes] = useState<OperationTimes>({}); // State to store operation times
  const [progressBarKey, setProgressBarKey] = useState<number>(0); // Default key
  const resetProgressBars = () => {
    setProgressBarKey(prevKey => prevKey + 1);
  };

  // Function to calculate operation time based on processor speed
  const calculateOperationTime = (speed: string): string => {
    const operations = 1e9; // Number of operations for the task
    const speedValue = parseFloat(speed);
    const speedUnit = speed.match(/[a-zA-Z]+/)?.[0];
    let multiplier = 1;

    switch (speedUnit) {
      case 'KHz':
        multiplier = 1e3; // Convert KHz to Hz
        break;
      case 'GHz':
        multiplier = 1e9; // Convert GHz to Hz
        break;
      default:
        multiplier = 1e6; // Assume MHz if no unit is provided, convert MHz to Hz
    }

    const hertz = speedValue * multiplier;
    const timeInSeconds = operations / hertz;
    return `${timeInSeconds.toFixed(2)} seconds`; // Return operation time as a string
  };

  // Populate operationTimes when the component mounts
  useEffect(() => {
    const newOperationTimes = computingEras.reduce((times, era) => {
      times[era.era] = calculateOperationTime(era.speed);
      return times;
    }, {} as OperationTimes); // Cast the initial value to OperationTimes
    setOperationTimes(newOperationTimes);
  }, []); // Empty dependency array ensures this runs once on mount

  // Function to calculate the duration of the progress bar animation based on processor speed
  const calculateDuration = (speed: string): number => {
    if (speed === 'N/A') {
      return 3000; // Use minimum duration for 'N/A'
    }
    const speedValue = parseFloat(speed);
    const speedUnit = speed.match(/[a-zA-Z]+/)?.[0];
    let multiplier = 1;
  
    switch (speedUnit) {
      case 'KHz':
        multiplier = 0.001; // Convert KHz to MHz
        break;
      case 'GHz':
        multiplier = 1000 * Math.log10(speedValue + 1); // Adjust for exponential growth in GHz
        break;
      default:
        multiplier = 1; // Assume MHz if no unit is provided
    }
  
    const relativeSpeed = speedValue * multiplier;
    const baseSpeed = 10; // Baseline speed from the 1970s in MHz
    const duration = baseSpeed / relativeSpeed * 15; // Base duration of 15 seconds
    return duration; // Return duration as a number
  };

  // Handlers for the buttons to adjust the animation speed
  const slowDownAnimation = (): void => {
    setAnimationSpeed(prevSpeed => Math.max(prevSpeed / 2, 0.125)); // Slow down, but not less than 1/8th speed
  };

  const speedUpAnimation = (): void => {
    setAnimationSpeed(prevSpeed => Math.min(prevSpeed * 2, 8)); // Speed up, but not more than 8x speed
  };

  return (
    <div>
  <div style={{ textAlign: 'center' }}>
  <h1 className={title({ color: "cyan" })}>Relative CPU History and Comparison in OPS.</h1>
</div>
<br></br>

  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <ButtonGroup>
      <Button color="success" onClick={slowDownAnimation}>Slow Down</Button>
      <Button color="warning" onClick={speedUpAnimation}>Speed Up</Button>
      <Button color="danger" onClick={resetProgressBars}>Reset</Button>
    </ButtonGroup>
  </div>


<div className="grid-container">
  {computingEras.map((era, index) => (
    <div key={index} className="era-container">
      <h2 style={{ color: index % 2 === 0 ? 'cyan' : 'violet' }}>
        <strong>{era.era}</strong>
      </h2>
      <p>{era.description}</p>
      <div className="progress-bar-bg">
        <div 
          key={progressBarKey}
          className="progress-bar-fg" 
          style={{ 
            backgroundColor: index % 2 === 0 ? 'violet' : 'cyan',
            animation: `fillBar ${calculateDuration(era.speed) / animationSpeed}s linear forwards` 
          }}
        />
      </div>
      <p><strong>Speed:</strong> {era.speed}</p>
      <p><strong>Operation Time:</strong> {operationTimes[era.era]}</p>
      <img src={era.image} style={{ width: '75%' }}  alt={`Image of ${era.era}`} />
    </div>
  ))}
</div>

      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 1rem;
        }
        .era-container {
          margin-bottom: 1rem;
        }
        .progress-bar-bg {
          height: 20px;
          width: 100%;
          background-color: #ccc;
          border-radius: 5px;
          overflow: hidden;
        }
        .progress-bar-fg {
          height: 100%;
          background-color: #007BFF;
          width: 0;
        }
        @keyframes fillBar {
          to {
            width: 100%;
          }
        }
        h2, .progress-bar-bg + p, .progress-bar-bg + p + p {
          font-size: larger;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
  
      }  