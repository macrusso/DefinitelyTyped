// Type definitions for react-remarkable 1.1
// Project: https://github.com/acdlite/react-remarkable#readme
// Definitions by: Mac Rusek <https://github.com/macrusso>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

export interface MarkdownProps {
    options?: any;
    source?: string;
    container?: any;
}

declare class Markdown extends React.Component<MarkdownProps> {
    constructor(props: MarkdownProps);
}

export default Markdown;
