import type { ReactNode } from "react";

export function DataTableFrame({
  caption,
  children,
}: {
  caption: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-box border-base-300 bg-base-100 overflow-x-auto border">
      <table className="table-zebra table-sm sm:table-md table">
        <caption className="text-base-content/70 px-4 pt-4 pb-2 text-left text-sm font-medium">
          {caption}
        </caption>
        {children}
      </table>
    </div>
  );
}
