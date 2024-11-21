interface StatusBarProps {
  statName: string
  percentage: number
}

export default function StatusBar({ statName, percentage }: StatusBarProps) {
  const clampedPercentage = Math.max(0, Math.min(100, percentage))

  const getColor = (percent: number) => {
    if (percent >= 66) return "bg-gradient-to-r from-green-500 to-green-600"
    if (percent >= 33) return "bg-gradient-to-r from-yellow-500 to-yellow-600"
    return "bg-gradient-to-r from-red-500 to-red-600"
  }

  return (
    <div className="w-full max-w-md">
      <div className="mb-2 flex justify-between">
        <span className="text-sm font-medium text-gray-700">{statName}</span>
        <span className="text-sm font-medium text-gray-700">
          {clampedPercentage}%
        </span>
      </div>
      <div className="h-4 w-full rounded-full bg-gray-200">
        <div
          className={`h-full rounded-full ${getColor(
            clampedPercentage
          )} transition-all duration-300 ease-in-out`}
          style={{ width: `${clampedPercentage}%` }}
          role="progressbar"
        ></div>
      </div>
    </div>
  )
}
