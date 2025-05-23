import { Switch } from "@/components/ui/switch";

const sizes = [
  { name: "icon", label: "Icon" },
  { name: "xs", label: "XSmall" },
  { name: "sm", label: "Small" },
  { name: "md", label: "Medium" },
  { name: "lg", label: "Large" },
] as const;

export default function SwitchDefaultExample() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      {sizes.map((size) => (
        <div key={size.name} className="flex flex-col items-center gap-2">
          <Switch size={size.name} />
          <span className="text-sm text-muted-foreground">{size.label}</span>
        </div>
      ))}
    </div>
  );
}
