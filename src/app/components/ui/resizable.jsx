import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";

export function ResizableLayout({ left, right }) {
  return (
    <PanelGroup direction="horizontal" className="h-full w-full">

      <Panel defaultSize={30}>
        {left}
      </Panel>

      <PanelResizeHandle className="w-1 bg-gray-200 hover:bg-gray-300" />

      <Panel defaultSize={70}>
        {right}
      </Panel>

    </PanelGroup>
  );
}