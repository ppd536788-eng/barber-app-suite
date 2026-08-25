import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Minus } from "lucide-react";

type Row = [string, boolean, boolean];

function List({ rows, index }: { rows: Row[]; index: 1 | 2 }) {
  return (
    <ul className="divide-y divide-border">
      {rows.map((r) => {
        const has = r[index];
        return (
          <li key={r[0]} className="flex items-center justify-between gap-3 py-3 text-base">
            <span className={has ? "" : "text-muted-foreground"}>{r[0]}</span>
            {has ? (
              <Check className="size-5 shrink-0 text-primary" aria-label="incluído" />
            ) : (
              <Minus className="size-5 shrink-0 text-muted-foreground" aria-label="não incluído" />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function ComparisonMobile({ rows }: { rows: Row[] }) {
  return (
    <div className="sm:hidden">
      <div className="grid grid-cols-2 gap-3">
        <div className="surface-card p-4">
          <p className="text-xs font-semibold tracking-wide">ESSENCIAL</p>
          <p className="mt-1 text-2xl font-semibold tracking-tight">R$ 50</p>
          <p className="mt-1 text-xs text-muted-foreground">1 a 4 dias</p>
        </div>
        <div className="surface-card p-4 ring-1 ring-primary/40">
          <p className="text-xs font-semibold tracking-wide text-primary">PRO</p>
          <p className="mt-1 text-2xl font-semibold tracking-tight">R$ 150</p>
          <p className="mt-1 text-xs text-muted-foreground">1 a 3 semanas</p>
        </div>
      </div>

      <Tabs defaultValue="pro" className="mt-5">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="essencial" className="min-h-[40px]">
            Ver ESSENCIAL
          </TabsTrigger>
          <TabsTrigger value="pro" className="min-h-[40px]">
            Ver PRO
          </TabsTrigger>
        </TabsList>
        <TabsContent value="essencial">
          <List rows={rows} index={1} />
        </TabsContent>
        <TabsContent value="pro">
          <List rows={rows} index={2} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
