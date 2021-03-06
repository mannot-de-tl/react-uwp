import * as React from "react";
import * as PropTypes from "prop-types";

import MarkdownRender from "react-uwp/MarkdownRender";
import * as readMeText from "!raw!./README.md";

export interface DataProps {}

export interface ServerSideRenderingProps extends DataProps, React.HTMLAttributes<HTMLDivElement> {}

export default class ServerSideRendering extends React.Component<ServerSideRenderingProps> {
  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };

  render() {
    const {
      style,
      ...attributes
    } = this.props;
    const { theme } = this.context;

    return (
      <MarkdownRender
        {...attributes}
        style={theme.prefixStyle({ ...style, padding: "0 20px 60px" })}
        text={readMeText as any}
      />
    );
  }
}
