import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

const ShiftManagement = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">シフト管理</h1>
      <div className="flex space-x-8">
        <div className="w-1/2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-xl font-semibold mb-4">シフト詳細</h2>
          {/* TODO: シフト詳細の表示と編集機能を実装 */}
          <Button className="mt-4">シフトを追加</Button>
        </div>
      </div>
    </div>
  );
};

export default ShiftManagement;
