import {Paper, Typography} from "@mui/material";
import React, {Fragment} from "react";
import CodeBlock from "../Syntax Highlights/CodeBlock";

export const CodePage = () => {
  const codeExample = `import * as React from 'react';
    import Button from '@mui/material/Button';
  
    export default function ButtonUsage() {
      return <Button variant="contained">Hello world</Button>;
    }`;
  const codeExample2 = `import * as React from 'react';
    import Button from '@mui/material/Button';
  
    export default function ButtonUsage() {
      return <Button variant="contained">Hi world</Button>;
    }`;

  return (
    <Fragment>
      <Paper>
        <Typography>Sample Code</Typography>
        <CodeBlock code={codeExample} />
      </Paper>

      <Paper>
        <Typography>Sample Code 2</Typography>
        <CodeBlock code={codeExample2} />
      </Paper>
    </Fragment>
  );
};
