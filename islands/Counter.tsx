import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  key: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      <Button onClick={() => props.key.value -= 1}>-1</Button>
      <p class="text-3xl">{props.key}</p>
      <Button onClick={() => props.key.value += 1}>+1</Button>
    </div>
  );
}
