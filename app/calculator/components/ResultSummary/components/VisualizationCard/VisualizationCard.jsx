import useStore from "@/lib/store";
import { PieChart, Pie, Cell } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

function VisualizationCard() {
  const { visualData } = useStore();

  const renderCustomLabel = (data) => `${data.name}: ${data.rate}%`;
  const COLORS = ["#00C49F", "#FF8042"];

  return (
    <Card>
      <CardContent>
        <PieChart width={400} height={150}>
          <Pie
            data={visualData}
            dataKey="rate"
            cx="50%"
            cy="50%"
            outerRadius={50}
            label={renderCustomLabel}
          >
            {visualData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </CardContent>
    </Card>
  );
}

export default VisualizationCard;
