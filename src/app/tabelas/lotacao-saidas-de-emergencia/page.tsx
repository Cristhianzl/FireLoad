import type { Metadata } from "next";
import { DataTableFrame } from "@/components/DataTableFrame";
import { TablePage } from "@/components/TablePage";
import { ROUTES } from "@/lib/config";
import { EXITS_ROWS } from "@/lib/exits";
import { pageInfo } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { tableExits } from "@/locales/pt-BR";

export const metadata: Metadata = pageMetadata(pageInfo(ROUTES.tableExits));

export default function ExitsTablePage() {
  return (
    <TablePage
      path={ROUTES.tableExits}
      title={tableExits.h1}
      intro={tableExits.intro}
      breadcrumb={tableExits.breadcrumb}
      refIds={["it11"]}
      variables={tableExits.variables}
      answer={tableExits.answer}
      cta={{ href: ROUTES.exits, label: tableExits.cta }}
      related={[ROUTES.exits, ROUTES.tableTrrf, ROUTES.norms]}
    >
      <DataTableFrame caption={tableExits.caption}>
        <thead>
          <tr>
            <th scope="col">{tableExits.colGroup}</th>
            <th scope="col">{tableExits.colDivision}</th>
            <th scope="col">{tableExits.colPopulation}</th>
            <th scope="col" className="text-right">
              {tableExits.colAcessos}
            </th>
            <th scope="col" className="text-right">
              {tableExits.colEscadas}
            </th>
            <th scope="col" className="text-right">
              {tableExits.colPortas}
            </th>
          </tr>
        </thead>
        <tbody>
          {EXITS_ROWS.map((row) => (
            <tr key={row.divisao}>
              <td className="min-w-36">{row.grupoLabel}</td>
              <th scope="row" className="font-medium whitespace-nowrap">
                {row.divisao}
              </th>
              <td className="min-w-56">{row.popRule}</td>
              <td className="readout-value text-right">{row.cap.acessos}</td>
              <td className="readout-value text-right">{row.cap.escadas}</td>
              <td className="readout-value text-right">{row.cap.portas}</td>
            </tr>
          ))}
        </tbody>
      </DataTableFrame>
      <p className="text-base-content/60 mt-3 text-sm">
        {tableExits.capacityNote}
      </p>
    </TablePage>
  );
}
