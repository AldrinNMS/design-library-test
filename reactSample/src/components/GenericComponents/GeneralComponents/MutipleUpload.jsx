import React, {Fragment, useEffect, useRef, useState} from "react";
import {useDropzone} from "react-dropzone";
import {IconButton, Typography, Paper, Box, Stack, Button} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {CustTab} from "./CustTab";
import CodeBlock from "../../Syntax Highlights/CodeBlock";

const MultipleUploads = (props) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [filePreviews, setFilePreviews] = useState([]);
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  const inputRef = useRef(null);

  useEffect(() => {
    const previews = acceptedFiles.map((file, index) => {
      const previewURL = URL.createObjectURL(file);
      const fileId = `file_${index}`;
      return (
        <div key={fileId} style={{position: "relative"}}>
          <img
            src={previewURL}
            alt={`Preview of ${file.path}`}
            style={{maxWidth: "100%", maxHeight: "50%", marginBottom: "10px"}}
          />
          {selectedFiles.includes(file) && (
            <IconButton
              color="error"
              onClick={() => handleToggleFile(file)}
              style={{
                position: "relative",
                top: 0,
                right: 0,
                margin: "5px",
                zIndex: 1,
              }}
            >
              <DeleteIcon />
            </IconButton>
          )}
        </div>
      );
    });
    setFilePreviews(previews);

    return () => {
      previews.forEach((preview) => URL.revokeObjectURL(preview.key));
    };
  }, [acceptedFiles, selectedFiles]);

  const handleBrowseClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleToggleFile = (fileToToggle) => {
    if (selectedFiles.includes(fileToToggle)) {
      setSelectedFiles(selectedFiles.filter((file) => file !== fileToToggle));
    } else {
      setSelectedFiles([...selectedFiles, fileToToggle]);
    }
  };

  const handleDeleteSelectedFiles = () => {
    const updatedFiles = acceptedFiles.filter(
      (file) => !selectedFiles.includes(file)
    );
    setFilePreviews([]);
    setSelectedFiles([]);
  };

  const codeExample = `import React, {Fragment, useEffect, useRef, useState} from "react";
  import {useDropzone} from "react-dropzone";
  import {IconButton, Typography, Paper, Box, Stack, Button} from "@mui/material";
  import DeleteIcon from "@mui/icons-material/Delete";
  import {CustTab} from "./CustTab";
  import CodeBlock from "../../Syntax Highlights/CodeBlock";
  
  const MultipleUploads = (props) => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [filePreviews, setFilePreviews] = useState([]);
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    const inputRef = useRef(null);
  
    useEffect(() => {
      const previews = acceptedFiles.map((file, index) => {
        const previewURL = URL.createObjectURL(file);

        return (
          <div key={fileId} style={{position: "relative"}}>
            <img
              src={previewURL}
            
              style={{maxWidth: "100%", maxHeight: "50%", marginBottom: "10px"}}
            />
            {selectedFiles.includes(file) && (
              <IconButton
                color="error"
                onClick={() => handleToggleFile(file)}
                style={{
                  position: "relative",
                  top: 0,
                  right: 0,
                  margin: "5px",
                  zIndex: 1,
                }}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </div>
        );
      });
      setFilePreviews(previews);
  
      return () => {
        previews.forEach((preview) => URL.revokeObjectURL(preview.key));
      };
    }, [acceptedFiles, selectedFiles]);
  
    const handleBrowseClick = () => {
      if (inputRef.current) {
        inputRef.current.click();
      }
    };
  
    const handleToggleFile = (fileToToggle) => {
      if (selectedFiles.includes(fileToToggle)) {
        setSelectedFiles(selectedFiles.filter((file) => file !== fileToToggle));
      } else {
        setSelectedFiles([...selectedFiles, fileToToggle]);
      }
    };
  
    const handleDeleteSelectedFiles = () => {
      const updatedFiles = acceptedFiles.filter(
        (file) => !selectedFiles.includes(file)
      );
      setFilePreviews([]);
      setSelectedFiles([]);
    };
  
    return (
      <Fragment>
        <Paper elevation={0}>
          <CustTab
            label1={"Preview"}
            label2={"JSX"}
            tabContent={
              <Box>
                <Stack spacing={4}>
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
                          <img src="/images/UploadImage.png" alt="Upload" />
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
                  <Stack direction="row" spacing={2}>
                    {filePreviews}
                  </Stack>
                </Stack>
              </Box>
            }
            syntaxTab={<CodeBlock code={codeExample} />}
          />
        </Paper>
      </Fragment>
    );
  };
  
  export default MultipleUploads;
  `;

  return (
    <Fragment>
      <Paper elevation={0}>
        <CustTab
          label1={"Preview"}
          label2={"JSX"}
          tabContent={
            <Box>
              <Stack spacing={4}>
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
                        <img src="/images/UploadImage.png" alt="Upload" />
                      </Box>
                      <Typography variant="h4">
                        Drop file here or click to upload
                      </Typography>
                      <Typography variant="h5">
                        Drop file here or click
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
                <Stack direction="row" spacing={2}>
                  {filePreviews}
                </Stack>
              </Stack>
            </Box>
          }
          syntaxTab={<CodeBlock code={codeExample} />}
        />
      </Paper>
    </Fragment>
  );
};

export default MultipleUploads;
