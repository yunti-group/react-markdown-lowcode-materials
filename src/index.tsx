import * as React from 'react'
import OriginalMarkdown, { Options } from 'react-markdown';

const Markdown = (props: Options) => {
  const {children, ...otherProps} = props
  return <OriginalMarkdown {...otherProps}>
  {(props.children || '').toString()}
  </OriginalMarkdown>
}
export default Markdown
Markdown.displayName = 'YuntiReactMarkdownLowcodeMaterials';
export type MarkdownProps = Options


