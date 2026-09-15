import type { Metadata } from "next";
import { DataTableFrame } from "@/components/DataTableFrame";
import { TablePage } from "@/components/TablePage";
import { ROUTES } from "@/lib/config";
import { formatNumber } from "@/lib/format";
import { MATERIALS } from "@/lib/materials";
import { pageInfo } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { tableHeat } from "@/locales/pt-BR";

export const metadata: Metadata = pageMetadata(pageInfo(ROUTES.tableHeat));

export default function HeatTablePage() {
  return (
    <TablePage
      path={ROUTES.tableHeat}
      title={tableHeat.h1}
      intro={tableHeat.intro}
      breadcrumb={tableHeat.breadcrumb}
      refIds={["it14"]}
      variables={tableHeat.variables}
      answer={tableHeat.answer}
      cta={{ href: ROUTES.home, label: tableHeat.cta }}
      related={[ROUTES.home, ROUTES.tableStorage, ROUTES.tableOccupancy]}
    >
      <div className="mx-auto max-w-3xl">
        <DataTableFrame caption={tableHeat.caption}>
          <thead>
            <tr>
              <th scope="col">{tableHeat.colMaterial}</th>
              <th scope="col" className="text-right">
                {tableHeat.colHi}
              </th>
            </tr>
          </thead>
          <tbody>
            {MATERIALS.map((material) => (
              <tr key={material.name}>
                <th scope="row" className="font-normal">
                  {material.name}
                </th>
                <td className="readout-value text-right">
                  {formatNumber(material.hi, material.hi % 1 === 0 ? 0 : 1)}
                </td>
              </tr>
            ))}
          </tbody>
        </DataTableFrame>
      </div>
    </TablePage>
  );
}
