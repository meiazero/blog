interface BannerProps {
  url: string;
  altImage?: string;
  titleImage?: string;
}

export function Banner(props: BannerProps) {
  return (
    <div className="mb-8 flex h-64 w-full items-center justify-center rounded-md border border-slate-400 bg-slate-200 p-1">
      <img
        src={props.url}
        alt={props.altImage || ""}
        title={props.titleImage || ""}
        className="object-fit h-full w-full rounded-md"
      />
    </div>
  );
}
