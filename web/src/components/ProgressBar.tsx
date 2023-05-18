import * as Progress from "@radix-ui/react-progress"

interface ProgressBarProps {
  progress: number
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <Progress.Root
      max={100}
      value={progress}
      className="relative overflow-hidden h-3 rounded-xl bg-zinc-700 w-full mt-4"
      style={{ transform: "translateZ(0)" }}
    >
      <Progress.Indicator
        className="h-3 rounded-xl transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)] bg-violet-600"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  )
}
