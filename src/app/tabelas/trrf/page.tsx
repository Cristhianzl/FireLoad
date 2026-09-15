import type { Metadata } from "next";
import { DataTableFrame } from "@/components/DataTableFrame";
import { TablePage } from "@/components/TablePage";
import { ROUTES } from "@/lib/config";
import { pageInfo } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import {
  describeTrrfCell,
  TRRF_ROWS,
  TRRF_TABLE_CLASSES,
  type TrrfCell,
} from "@/lib/trrf";
import { tableTrrf } from "@/locales/pt-BR";

export const metadata: Metadata = pageMetadata(pageInfo(ROUTES.tableTrrf));

function TrrfValue({ cell }: { cell: TrrfCell | undefined }) {
  const value = describeTrrfCell(cell);
  if (value.kind === "minutes") return <>{value.minutes}</>;
  if (value.kind === "see-item")
    return <>{tableTrrf.cellSeeItem(value.item)}</>;
  return <span aria-label={tableTrrf.cellNaLabel}>{tableTrrf.cellNa}</span>;
}

export default function TrrfTablePage() {
  return (
    <TablePage
      path={ROUTES.tableTrrf}
      title={tableTrrf.h1}
      intro={tableTrrf.intro}
      breadcrumb={tableTrrf.breadcrumb}
      refIds={["it08"]}
      variables={tableTrrf.variables}
      answer={tableTrrf.answer}
      cta={{ href: ROUTES.trrf, label: tableTrrf.cta }}
      related={[ROUTES.trrf, ROUTES.tableExits, ROUTES.norms]}
    >
      <DataTableFrame caption={tableTrrf.caption}>
        <thead>
          <tr>
            <th scope="col">{tableTrrf.colGroup}</th>
            <th scope="col">{tableTrrf.colDivision}</th>
            {TRRF_TABLE_CLASSES.map((cls) => (
              <th key={cls.key} scope="col" className="text-right">
                <abbr title={cls.range} className="no-underline">
                  {cls.key.toUpperCase()}
                </abbr>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TRRF_ROWS.map((row) => (
            <tr key={row.divisao}>
              <td className="min-w-32">{row.grupoLabel}</td>
              <th scope="row" className="min-w-28 font-medium">
                {row.divisao}
              </th>
              {TRRF_TABLE_CLASSES.map((cls) => (
                <td
                  key={cls.key}
                  className="readout-value text-right whitespace-nowrap"
                >
                  <TrrfValue cell={row.trrf[cls.key]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </DataTableFrame>
      <p className="text-base-content/60 mt-3 text-sm">{tableTrrf.legend}</p>
    </TablePage>
  );
}
