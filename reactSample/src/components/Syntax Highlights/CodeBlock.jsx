import React, {Fragment, useRef, useState, useEffect} from "react";
import {Paper, IconButton} from "@mui/material";
import {Light as SyntaxHighlighter} from "react-syntax-highlighter";
import {nightOwl} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {CopyIcon} from "../SVGComponents";
import Prism from "prismjs";
import CustSnackbar from "../GenericComponents/GeneralComponents/CustSnackbar";

const CodeBlock = ({code}) => {
  const codeRef = useRef(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopyClick = () => {
    if (codeRef.current) {
      setSnackbarOpen(true);
    }
  };

  const handleCopyToClipboard = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Fragment>
      <div style={{position: "relative"}}>
        <CopyToClipboard text={code} onCopy={handleCopyToClipboard}>
          <IconButton
            aria-label="Copy to Clipboard"
            onClick={handleCopyClick}
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              color: "#fff",
            }}
          >
            <CopyIcon />
          </IconButton>
        </CopyToClipboard>

        <Paper
          elevation={3}
          style={{
            padding: "24px",
            borderRadius: "16px",
            backgroundColor: "#011627",
            overflow: "auto",
            maxHeight: "50vh",
          }}
        >
          <SyntaxHighlighter style={{...nightOwl}} showLineNumbers>
            {code}
          </SyntaxHighlighter>
        </Paper>
      </div>

      {snackbarOpen && (
        <CustSnackbar
          message="Code copied to clipboard!"
          onClose={handleSnackbarClose}
          severity="success"
        />
      )}
    </Fragment>
  );
};

export default CodeBlock;
