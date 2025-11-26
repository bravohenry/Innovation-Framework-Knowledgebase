

import React from 'react';
import { InteractiveConfig } from '../types';
import { RadarTool } from './charts/RadarTool';
import { RaciTool } from './charts/RaciTool';
import { MatrixTool } from './charts/MatrixTool';
import { TableTool } from './charts/TableTool';
import { TreeTool } from './charts/TreeTool';
import { CanvasTool } from './charts/CanvasTool';
import { PersonaTool } from './charts/PersonaTool';
import { GanttTool } from './charts/GanttTool';
import { StrategyCanvasTool } from './charts/StrategyCanvasTool';
import { BMCTool } from './charts/BMCTool';
import { ValuePropositionTool } from './charts/ValuePropositionTool';
import { PriorityMatrixTool } from './charts/PriorityMatrixTool';
import { MoscowTool } from './charts/MoscowTool';
import { ThinkAloudTool } from './charts/ThinkAloudTool';
import { UsabilityTestTool } from './charts/UsabilityTestTool';
import { IterationCycleTool } from './charts/IterationCycleTool';
import { ABTestTool } from './charts/ABTestTool';
import { BalancedScorecardTool } from './charts/BalancedScorecardTool';
import { BrandObituaryTool } from './charts/BrandObituaryTool';
import { PitchDeckTool } from './charts/PitchDeckTool';
import { VisionVideoTool } from './charts/VisionVideoTool';
import { ExecSummaryTool } from './charts/ExecSummaryTool';
import { ProcessBookTool } from './charts/ProcessBookTool';

interface Props {
  config: InteractiveConfig;
}

export const InteractiveTools: React.FC<Props> = ({ config }) => {
  switch (config.type) {
    case 'radar':
      return <RadarTool config={config} />;
    case 'raci':
      return <RaciTool config={config} />;
    case 'matrix':
      return <MatrixTool config={config} />;
    case 'tree':
      return <TreeTool config={config} />;
    case 'canvas':
      return <CanvasTool config={config} />;
    case 'persona':
      return <PersonaTool config={config} />;
    case 'gantt':
      return <GanttTool config={config} />;
    case 'strategy-canvas':
      return <StrategyCanvasTool config={config} />;
    case 'bmc':
      return <BMCTool config={config} />;
    case 'value-proposition':
      return <ValuePropositionTool config={config} />;
    case 'priority-matrix':
      return <PriorityMatrixTool config={config} />;
    case 'moscow':
      return <MoscowTool config={config} />;
    case 'think-aloud':
      return <ThinkAloudTool config={config} />;
    case 'usability-test':
      return <UsabilityTestTool config={config} />;
    case 'iteration-cycle':
      return <IterationCycleTool config={config} />;
    case 'ab-test':
      return <ABTestTool config={config} />;
    case 'balanced-scorecard':
      return <BalancedScorecardTool config={config} />;
    case 'brand-obituary':
      return <BrandObituaryTool config={config} />;
    case 'pitch-deck':
      return <PitchDeckTool config={config} />;
    case 'vision-video':
      return <VisionVideoTool config={config} />;
    case 'exec-summary':
      return <ExecSummaryTool config={config} />;
    case 'process-book':
      return <ProcessBookTool config={config} />;
    case 'table':
    default:
      return <TableTool config={config} />;
  }
};