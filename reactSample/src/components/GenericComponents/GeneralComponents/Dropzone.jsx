import React, {Fragment, useEffect, useRef, useState} from "react";
import {useDropzone} from "react-dropzone";
import {Button, Typography, Paper, Box, Stack} from "@mui/material";
import {CustTab} from "./CustTab";
import CodeBlock from "../../Syntax Highlights/CodeBlock";

const SingleUpload = (props) => {
  const codeExample = `import React, {Fragment, useEffect, useRef, useState} from "react";
  import {useDropzone} from "react-dropzone";
  import {Button, Typography, Paper, Box, Stack} from "@mui/material";
  import {CustTab} from "./CustTab";
  import CodeBlock from "../../Syntax Highlights/CodeBlock";
  
  const SingleUpload = (props) => {
    const [filePreview, setFilePreview] = useState(null);
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
      maxFiles: 1,
    });
    const inputRef = useRef(null);
  
    useEffect(() => {
      if (acceptedFiles.length === 1) {
        const file = acceptedFiles[0];
        const previewURL = URL.createObjectURL(file);
        setFilePreview(
          <img
            key={file.path}
            src={previewURL}
        
            style={{maxWidth: "20%", maxHeight: "20%", marginBottom: "10px"}}
          />
        );
  
        return () => URL.revokeObjectURL(previewURL);
      } else {
        setFilePreview(null);
      }
    }, [acceptedFiles]);
  
    const handleBrowseClick = () => {
      if (inputRef.current) {
        inputRef.current.click();
      }
    };
  
    return (
      <Fragment>
        <Paper elevation={1}>
          <CustTab
            label1={"Preview"}
            label2={"JSX"}
            chartTab={
              <Box>
                <Paper
                  elevation={0}
                  className="container"
                  variant="dashedVariant"
                >
                  <Box {...getRootProps({className: "dropzone"})}>
                    <input {...getInputProps()} ref={inputRef} />
                    <Stack
                      spacing={4}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        onClick={handleBrowseClick}
                        style={{cursor: "pointer"}}
                      >
                        <img src="/public/images/UploadImage.png" alt="Upload" />
                      </Box>
  
                      <Typography variant="h4">
                        Drop file here or click to upload
                      </Typography>
                      <Typography variant="h5">
                        Drop file here or click{" "}
                        <span
                          style={{color: "red", cursor: "pointer"}}
                          onClick={handleBrowseClick}
                        >
                          browse &nbsp;
                        </span>
                        through your machine
                      </Typography>
                    </Stack>
                  </Box>
                </Paper>
                <Box>{filePreview}</Box>
              </Box>
            }
            syntaxTab={<CodeBlock code={codeExample} />}
          />
        </Paper>
      </Fragment>
    );
  };
  
  export default SingleUpload;
  `;

  const [filePreview, setFilePreview] = useState(null);
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    maxFiles: 1,
  });
  const inputRef = useRef(null);

  useEffect(() => {
    if (acceptedFiles.length === 1) {
      const file = acceptedFiles[0];
      const previewURL = URL.createObjectURL(file);
      setFilePreview(
        <img
          key={file.path}
          src={previewURL}
          alt={`Preview of ${file.path}`}
          style={{maxWidth: "20%", maxHeight: "20%", marginBottom: "10px"}}
        />
      );

      return () => URL.revokeObjectURL(previewURL);
    } else {
      setFilePreview(null);
    }
  }, [acceptedFiles]);

  const handleBrowseClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <Fragment>
      <Paper elevation={0}>
        <CustTab
          label1={"Preview"}
          label2={"JSX"}
          tabContent={
            <Box>
              <Paper
                elevation={0}
                className="container"
                variant="dashedVariant"
              >
                <Box {...getRootProps({className: "dropzone"})}>
                  <input {...getInputProps()} ref={inputRef} />
                  <Stack
                    spacing={4}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      onClick={handleBrowseClick}
                      style={{cursor: "pointer"}}
                    >
                      <img src="/public/images/UploadImage.png" alt="Upload" />
                    </Box>

                    <Typography variant="h4">
                      Drop file here or click to upload
                    </Typography>
                    <Typography variant="h5">
                      Drop file here or click{" "}
                      <span
                        style={{color: "red", cursor: "pointer"}}
                        onClick={handleBrowseClick}
                      >
                        browse &nbsp;
                      </span>
                      through your machine
                    </Typography>
                  </Stack>
                </Box>
              </Paper>
              <Box>{filePreview}</Box>
            </Box>
          }
          syntaxTab={<CodeBlock code={codeExample} />}
        />
      </Paper>
    </Fragment>
  );
};

export default SingleUpload;
