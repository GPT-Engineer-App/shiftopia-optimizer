import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Settings = () => {
  const [maxWorkHours, setMaxWorkHours] = useState('');
  const [breakTime, setBreakTime] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: 設定の保存ロジックを実装
    console.log('Settings saved:', { maxWorkHours, breakTime });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">設定</h1>
      <form onSubmit={handleSave}>
        <div className="mb-4">
          <Label htmlFor="maxWorkHours">最大勤務時間（1日あたり）</Label>
          <Input
            type="number"
            id="maxWorkHours"
            value={maxWorkHours}
            onChange={(e) => setMaxWorkHours(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <Label htmlFor="breakTime">休憩時間（分）</Label>
          <Input
            type="number"
            id="breakTime"
            value={breakTime}
            onChange={(e) => setBreakTime(e.target.value)}
            required
          />
        </div>
        <Button type="submit">保存</Button>
      </form>
    </div>
  );
};

export default Settings;
