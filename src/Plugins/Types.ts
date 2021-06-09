import { ReactNode } from 'react';

export type PluginConfig = {
  id: string;
  value: string;
  path: string;
};

export type PluginMatcher = (value: PluginConfig) => boolean;

export interface IPluginBuilder<PluginProps> {
  addProps: (props: PluginProps) => void;
  addMatcher: (fn: PluginMatcher) => void;
  addConfig: (plugin: PluginConfig, isDefault?: boolean) => void;
  buildPlugin: () => ReactNode;
};
