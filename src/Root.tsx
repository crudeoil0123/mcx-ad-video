import {Composition} from 'remotion';
import {MCXAdVideo} from './MCXAdVideo';

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="MCXAdVideo"
        component={MCXAdVideo}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
