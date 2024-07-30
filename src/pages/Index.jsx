import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

const Index = () => {
  const [particleCount, setParticleCount] = useState(100);
  const [spread, setSpread] = useState(70);

  const fireConfetti = () => {
    confetti({
      particleCount,
      spread,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Confetti Celebration!</h1>
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <Label htmlFor="particleCount">Particle Count: {particleCount}</Label>
          <Slider
            id="particleCount"
            min={10}
            max={500}
            step={10}
            value={[particleCount]}
            onValueChange={(value) => setParticleCount(value[0])}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="spread">Spread: {spread}</Label>
          <Slider
            id="spread"
            min={10}
            max={360}
            step={10}
            value={[spread]}
            onValueChange={(value) => setSpread(value[0])}
          />
        </div>
        <Button 
          onClick={fireConfetti}
          className="w-full text-lg py-6"
        >
          Celebrate! 🎉
        </Button>
      </div>
    </div>
  );
};

export default Index;
