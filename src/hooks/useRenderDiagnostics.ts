import { useRef, useEffect } from "react";

/**
 * A diagnostic React hook to monitor and log component re-render performance,
 * tracking both the total render count and the approximate paint duration.
 *
 * @param componentName The label of the component to track.
 */
export function useRenderDiagnostics(componentName: string) {
  const renderCount = useRef(0);
  const lastRenderTime = useRef(performance.now());

  renderCount.current += 1;
  const renderStartTime = performance.now();
  const timeSinceLastRender = renderStartTime - lastRenderTime.current;
  lastRenderTime.current = renderStartTime;

  useEffect(() => {
    const renderEndTime = performance.now();
    const activeRenderDuration = renderEndTime - renderStartTime;

    console.log(
      `%c[Diagnostic: ${componentName}]%c Render %c#${renderCount.current}%c completed. %cDuration: ${activeRenderDuration.toFixed(3)}ms%c | Interval: ${timeSinceLastRender.toFixed(1)}ms`,
      "color: #f80d05; font-weight: bold; font-family: monospace; background-color: #FEE2E2; padding: 2px 4px; border-radius: 4px;",
      "color: #0C1E36; font-family: monospace;",
      "color: #F59E0B; font-weight: bold; font-family: monospace;",
      "color: #0C1E36; font-family: monospace;",
      "color: #10B981; font-weight: bold; font-family: monospace;",
      "color: #64748B; font-family: monospace;"
    );
  });
}
