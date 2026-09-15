import type { Metadata } from "next";
import { DataTableFrame } from "@/components/DataTableFrame";
import { TablePage } from "@/components/TablePage";
import { ROUTES } from "@/lib/config";
import { formatNumber } from "@/lib/format";
import { groupOccupancies } from "@/lib/occupancies";
import { pageInfo } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { tableOccupancy } from "@/locales/pt-BR";

export const metadata: Metadata = pageMetadata(pageInfo(ROUTES.tableOccupancy));

const GROUPS = groupOccupancies();

export default function OccupancyTablePage() {
  return (
    <TablePage
      path={ROUTES.tableOccupancy}
      title={tableOccupancy.h1}
      intro={tableOccupancy.intro}
      breadcrumb={tableOccupancy.breadcrumb}
      refIds={["it14"]}
      variables={tableOccupancy.variables}
      answer={tableOccupancy.answer}
      cta={{ href: ROUTES.extinguishers, label: tableOccupancy.cta }}
      related={[ROUTES.extinguishers, ROUTES.tableStorage, ROUTES.tableHeat]}
    >
      <div className="mx-auto max-w-4xl">
        <nav aria-label={tableOccupancy.jumpLabel}>
          <p className="text-base-content/70 text-sm font-medium">
            {tableOccupancy.jumpLabel}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {GROUPS.map((group) => (
              <li key={group.letter}>
                <a
                  href={`#grupo-${group.letter.toLowerCase()}`}
                  className="btn btn-sm btn-outline"
                >
                  {group.letter}
                  <span className="sr-only"> {group.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 space-y-12">
          {GROUPS.map((group) => (
            <section
              key={group.letter}
              id={`grupo-${group.letter.toLowerCase()}`}
              className="scroll-mt-20"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display text-2xl font-bold">
                  {tableOccupancy.groupHeading(group.letter, group.label)}
                </h2>
                <span className="text-base-content/55 text-sm">
                  {tableOccupancy.groupCount(group.rows.length)}
                </span>
              </div>
              <div className="mt-4">
                <DataTableFrame caption={tableOccupancy.caption(group.letter)}>
                  <thead>
                    <tr>
                      <th scope="col">{tableOccupancy.colDescription}</th>
                      <th scope="col">{tableOccupancy.colDivision}</th>
                      <th scope="col" className="text-right">
                        {tableOccupancy.colLoad}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.rows.map((row) => (
                      <tr key={`${row.divisao}-${row.descricao}`}>
                        <th scope="row" className="font-normal">
                          {row.descricao}
                        </th>
                        <td className="whitespace-nowrap">{row.divisao}</td>
                        <td className="readout-value text-right">
                          {formatNumber(row.carga)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </DataTableFrame>
              </div>
            </section>
          ))}
        </div>
      </div>
    </TablePage>
  );
}
