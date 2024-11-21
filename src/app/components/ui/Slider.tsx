import { useRef, useState, useEffect } from "react"

const Slider = ({
  value,
  onChange,
}: {
  value: number
  onChange: (value: number) => void
}) => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const updateValue = (clientX: number) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect()
      const position = clientX - rect.left
      const percentage = Math.max(
        0,
        Math.min(100, (position / rect.width) * 100)
      )
      onChange(Math.round(percentage))
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    updateValue(e.clientX)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    updateValue(e.touches[0].clientX)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updateValue(e.clientX)
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        updateValue(e.touches[0].clientX)
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchmove", handleTouchMove)
    document.addEventListener("touchend", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleMouseUp)
    }
  }, [isDragging, onChange])

  return (
    <div
      ref={sliderRef}
      className="relative h-6 w-full cursor-pointer rounded-full bg-gray-200"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div
        className="absolute left-0 top-0 h-full rounded-full bg-blue-500 transition-all duration-100"
        style={{ width: `${value}%` }}
      />
      <div
        className="absolute top-1/2 h-full w-6 -translate-x-5 -translate-y-1/2 rounded-full bg-white border-2 border-blue-500 transition-all duration-100"
        style={{ left: `${value}%` }}
      />
    </div>
  )
}

export default Slider
