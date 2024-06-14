import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/utils/format";

function SummaryCard({
  income,
  incomeTax,
  medicare,
  totalTax,
  netPay,
  superGuarantee,
  reportableContributions,
  medicareLevySurcharge,
}) {
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
                {"- " + formatCurrency(incomeTax)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-sm">Medicare</TableCell>
              <TableCell className="text-right">
                {"- " + formatCurrency(medicare)}
              </TableCell>
            </TableRow>
            {medicareLevySurcharge ? (
              <TableRow>
                <TableCell className="text-sm">
                  Medicare Levy Surcharge
                </TableCell>
                <TableCell className="text-right">
                  {"- " + formatCurrency(medicareLevySurcharge)}
                </TableCell>
              </TableRow>
            ) : null}
            <TableRow>
              <TableCell className="text-sm font-bold">Total tax</TableCell>
              <TableCell className="text-right text-sm font-bold">
                {"- " + formatCurrency(totalTax)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-lg font-bold">Net pay</TableCell>
              <TableCell className="text-right text-lg font-bold">
                {formatCurrency(netPay)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="">Super Guarantee</TableCell>
              <TableCell className="text-right">
                {formatCurrency(superGuarantee)}
              </TableCell>
            </TableRow>

            {reportableContributions > 0 ? (
              <TableRow>
                <TableCell className="">Reportable contributions</TableCell>
                <TableCell className="text-right">
                  {formatCurrency(reportableContributions)}
                </TableCell>
              </TableRow>
            ) : null}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default SummaryCard;
