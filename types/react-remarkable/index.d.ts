// Type definitions for react-remarkable 1.1
// Project: https://github.com/acdlite/react-remarkable#readme
// Definitions by: Mac Rusek <https://github.com/macrusso>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

export interface IRemarkableProps {
    options?: any;
    source?: any;
    container?: any;
}

declare class Remarkable extends React.Component<IRemarkableProps> {
    constructor(props: IRemarkableProps);
}

export default Remarkable;
