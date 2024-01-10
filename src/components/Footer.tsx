'use client'

type Props = {};

export default function Footer({ }: Props) {
  return (
    <footer id="footer" className="w-full py-10 bg-zinc-910">
      <div className="flex flex-col items-center gap-12">
        <p className="text-center font-mono text-2xl">[Footer]</p>
      </div>
    </footer>
  );
}
