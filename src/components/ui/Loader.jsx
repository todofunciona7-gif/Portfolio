const delays = [0, 100, 200, 100, 200, 200, 300, 300, 400]

export default function Loader({ className = '' }) {
  return (
    <div className={`flex flex-wrap w-[162px] h-[162px] ${className}`}>
      {delays.map((delay, i) => (
        <div
          key={i}
          className="flex-[0_0_52px] m-[1px] box-border rounded bg-transparent animate-ripple"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </div>
  )
}
