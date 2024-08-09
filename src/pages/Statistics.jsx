import { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { toPng } from 'html-to-image';
import { Button } from "@/components/ui/button";

const data = [
  { name: '1月', 労働時間: 150, シフト数: 20 },
  { name: '2月', 労働時間: 160, シフト数: 22 },
  { name: '3月', 労働時間: 170, シフト数: 24 },
  { name: '4月', 労働時間: 155, シフト数: 21 },
  { name: '5月', 労働時間: 165, シフト数: 23 },
];

const Statistics = () => {
  const [isClient, setIsClient] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownload = () => {
    if (chartRef.current === null) {
      return;
    }

    toPng(chartRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'statistics-chart.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('Error generating image:', err);
      });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">統計</h1>
      <div ref={chartRef} className="mb-4">
        {isClient && (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="労働時間" stroke="#8884d8" />
              <Line yAxisId="right" type="monotone" dataKey="シフト数" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
      <Button onClick={handleDownload}>グラフをダウンロード</Button>
    </div>
  );
};

export default Statistics;
