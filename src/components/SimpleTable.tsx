import type { SimpleTable as SimpleTableContent } from "@/lib/content-types";

export function SimpleTable({ table }: { table: SimpleTableContent }) {
  return (
    <div className="rounded-box border-base-300 mt-5 overflow-x-auto border">
      <table className="table">
        <caption className="text-base-content/70 px-4 pt-3 text-left text-sm font-medium">
          {table.caption}
        </caption>
        <thead>
          <tr>
            {table.head.map((cell) => (
              <th key={cell} scope="col">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.join("|")}>
              {row.map((cell, index) =>
                index === 0 ? (
                  <th
                    key={`${index}-${cell}`}
                    scope="row"
                    className="font-medium"
                  >
                    {cell}
                  </th>
                ) : (
                  <td key={`${index}-${cell}`} className="readout-value">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
