import { PropsWithChildren } from "react";
import { ThemedView } from "@/components/ThemedView";

export function Collapsible({
  children,
  isOpen = true,
}: PropsWithChildren & { isOpen: boolean }) {
  return (
    <ThemedView>
      {isOpen && <ThemedView style={{}}>{children}</ThemedView>}
    </ThemedView>
  );
}
