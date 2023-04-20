import React from 'react';

interface WaveProps {
  /**
   * @description 波浪高度
   */
  height: number;

  /**
   * @description 波浪颜色
   * @default "white"
   */
  color?: string;

  /**
   * @description 一组svg路径，用于动画
   */
  animatePaths?: string[];

  /**
   * @description 波浪路径
   */
  path?: string;

  /**
   * @description 是否开启动画
   * @default false
   */
  animation?: boolean;
}

export const Wave = (props: WaveProps) => {
  const { height, color, animatePaths, path, animation } = props;

  return (
    <svg
      width="100%"
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {animation && animatePaths ? (
        <path fill={color}>
          <animate
            repeatCount="indefinite"
            fill="freeze"
            attributeName="d"
            dur="10s"
            values={animatePaths.join(";")}
          />
        </path>
      ) : (
        <path fill={color} path={path}></path>
      )}
    </svg>
  );
};

Wave.defaultProps = {
  animation: false,
  color: 'white',
  path: 'M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z',
};

export default Wave;
export type { WaveProps }
