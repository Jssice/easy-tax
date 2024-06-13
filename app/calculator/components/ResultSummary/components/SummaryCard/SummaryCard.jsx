import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/utils/format";

function SummaryCard({ income, incomeTax, medicare, totalTax, netPay }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Withholding</CardTitle>
      </CardHeader>
      <CardContent>
        <Separator />
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-lg">Salary</TableCell>
              <TableCell className="text-lg text-right">
                {formatCurrency(income)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-sm">Income tax</TableCell>
              <TableCell className="text-right">
                {formatCurrency(incomeTax)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-sm">Medicare</TableCell>
              <TableCell className="text-right">
                {formatCurrency(medicare)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-sm font-bold">Total tax</TableCell>
              <TableCell className="text-right text-sm font-bold">
                {formatCurrency(totalTax)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-lg font-bold">Net pay</TableCell>
              <TableCell className="text-right text-lg font-bold">
                {formatCurrency(netPay)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default SummaryCard;
