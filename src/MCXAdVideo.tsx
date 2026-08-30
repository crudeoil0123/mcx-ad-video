import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

export const MCXAdVideo = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const opacity = interpolate(
    frame,
    [0, fps, fps * 2],
    [0, 1, 1],
    {extrapolateRight: 'clamp'}
  );

  const moveUp = interpolate(
    frame,
    [0, fps * 2],
    [80, 0],
    {extrapolateRight: 'clamp'}
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#07121f',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 70,
        fontFamily: 'Arial',
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateY(${moveUp}px)`,
          textAlign: 'center',
          color: 'white',
        }}
      >
        <div
          style={{
            fontSize: 95,
            fontWeight: 'bold',
            marginBottom: 40,
          }}
        >
          MCX COMMODITY
        </div>

        <div
          style={{
            fontSize: 52,
            marginBottom: 80,
          }}
        >
          Market Updates & Analysis
        </div>

        <div style={{fontSize: 46, lineHeight: 1.8}}>
          CRUDE OIL
          <br />
          GOLD • SILVER
          <br />
          NATURAL GAS
        </div>

        <div
          style={{
            marginTop: 100,
            fontSize: 55,
            fontWeight: 'bold',
          }}
        >
          JOIN OUR COMMUNITY
        </div>

        <div
          style={{
            marginTop: 35,
            fontSize: 38,
          }}
        >
          Learn • Analyze • Stay Updated
        </div>
      </div>
    </AbsoluteFill>
  );
};
