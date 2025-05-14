import { Droplet } from "lucide-react";

export function RegistryLogo() {
  return (
    <>
      <div className="flex-shrink-0 rounded-md bg-primary p-1">
        <Droplet className="size-5 text-secondary" />
      </div>
      <span className="font-semibold font-mono text-xl">Lumoncn</span>
    </>
  );
}
