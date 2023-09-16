"use client"

import { ThreeCircles } from "react-loader-spinner"

interface ThreeCirclesSpinnerProps{
    isLoading: boolean
}

const ThreeCirclesSpinner: React.FC<ThreeCirclesSpinnerProps> = ({ isLoading }) => {
  return (
      <ThreeCircles
          height="100%"
          width="20%"
          color="crimson"
          wrapperStyle={{}}
          wrapperClass="threee-circles-wrapper"
          visible={isLoading}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
      />
  )
}

export default ThreeCirclesSpinner
