export default function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-[3px] bg-white border border-zinc-200 rounded-xl">
      <div className="border border-zinc-200 flex flex-col gap-2 rounded-lg">
        <div className="aspect-square w-full bg-gradient-to-br from-red-50 to-red-200 rounded-t-lg"></div>
        <div className="p-4">
          <h4 className="text-zinc-800 font-bold text-lg/6 mb-4">{title}</h4>
          <p className="text-zinc-500 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
