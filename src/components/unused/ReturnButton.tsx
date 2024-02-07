'use client'
export default function ReturnButton() {
  const handleOnClick = () => {
    console.log('>>>> projects button clicked')
  }
  return (
    <button onClick={handleOnClick} className="mt-16 w-[320px] h-12 bg-slate-900 text-xl text-slate-100 rounded-2xl border-2 border-slate-600 hover:bg-slate-800">Return Home...</button>
  )
}
