import { lazy } from "react";
import { IPluginBuilder, PluginConfig, PluginMatcher } from "./Types";

export class PluginBuilder<PluginProps> implements IPluginBuilder<PluginProps> {
  plugins: PluginConfig[];
  matcher: PluginMatcher;
  props: PluginProps;
  defaultPlugin?: PluginConfig;

  public constructor() {
    this.matcher = () => false;
    this.plugins = [] as PluginConfig[];
    this.props = {} as PluginProps;
  }

  public addProps(props: PluginProps): void {
    this.props = props;
  }

  public addMatcher(fn: PluginMatcher): void {
    this.matcher = fn;
  }

  public addConfig(plugin: PluginConfig, isDefault?: boolean): void {
    this.plugins.push(plugin);

    if (isDefault) this.defaultPlugin = plugin;
  }

  private renderPlugin = () => {
    const path =
      this.plugins.find((plugin) => this.matcher(plugin))?.path ??
      this.defaultPlugin?.path ??
      "";

    if (!path) throw new Error("Plugin not found!");

    return lazy(() => import(`${path}`));
  }

  public buildPlugin() {
    const Component = this.renderPlugin();
    return <Component {...this.props} />;
  }
}
