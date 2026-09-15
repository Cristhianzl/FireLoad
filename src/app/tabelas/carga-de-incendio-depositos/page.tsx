import type { Metadata } from "next";
import { DataTableFrame } from "@/components/DataTableFrame";
import { TablePage } from "@/components/TablePage";
import { ROUTES } from "@/lib/config";
import { formatNumber } from "@/lib/format";
import { pageInfo } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { STORAGE_HEIGHTS_M, STORAGE_ROWS } from "@/lib/storage";
import { tableStorage } from "@/locales/pt-BR";

export const metadata: Metadata = pageMetadata(pageInfo(ROUTES.tableStorage));

export default function StorageTablePage() {
  return (
    <TablePage
      path={ROUTES.tableStorage}
      title={tableStorage.h1}
      intro={tableStorage.intro}
      breadcrumb={tableStorage.breadcrumb}
      refIds={["it14"]}
      variables={tableStorage.variables}
      answer={tableStorage.answer}
      cta={{ href: ROUTES.storage, label: tableStorage.cta }}
      related={[ROUTES.storage, ROUTES.tableOccupancy, ROUTES.tableHeat]}
    >
      <DataTableFrame caption={tableStorage.caption}>
        <thead>
          <tr>
            <th scope="col">{tableStorage.colMaterial}</th>
            {STORAGE_HEIGHTS_M.map((meters) => (
              <th key={meters} scope="col" className="text-right">
                {tableStorage.heightColumn(meters)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {STORAGE_ROWS.map((row) => (
            <tr key={row.material}>
              <th scope="row" className="min-w-48 font-normal">
                {row.material}
              </th>
              {row.loads.map((load, index) => (
                <td
                  key={STORAGE_HEIGHTS_M[index]}
                  className="readout-value text-right whitespace-nowrap"
                >
                  {formatNumber(load)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </DataTableFrame>
    </TablePage>
  );
}
