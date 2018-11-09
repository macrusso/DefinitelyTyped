import Markdown, { MarkdownProps } from "react-remarkable";
import * as React from "react";

const initProps: MarkdownProps = {
    source: "### Markdown"
};

class MarkdownTest extends React.Component {
    render() {
        return <Markdown {...initProps} />;
    }
}
