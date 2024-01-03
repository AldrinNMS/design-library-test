import {ChatBubble} from "@mui/icons-material";
import {Paper, Stack, Typography} from "@mui/material";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "/src/quill.css";

export const SimpleRichText = (props) => {
  const {value, onChange, children} = props;

  return (
    <Paper sx={{borderRadius: "10px"}}>
      <Stack spacing={2}>
        <Typography variant="h4">Simple</Typography>
        <ReactQuill theme="snow" value={value} onChange={onChange} />
      </Stack>
    </Paper>
  );
};

export const FullRichText = (props) => {
  const {value, onChange, children} = props;

  return (
    <Paper sx={{borderRadius: "10px"}}>
      <Stack spacing={2}>
        <Typography variant="h4">Full</Typography>
        <ReactQuill
          modules={{
            toolbar: [
              [{size: ["normal", false, "Heading 2", "Heading 1"]}],
              ["blockquote", "code-block"],
              [{list: "bullet"}, {list: "ordered"}],

              [{script: "sub"}, {script: "super"}],
              [{indent: "-1"}, {indent: "+1"}],
              [{direction: "rtl"}],
              [{color: []}, {background: []}],
              [{font: []}],
              [{align: []}],
              ["clean"],
              ["link", "image", "video"],
            ],
          }}
          formats={[
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "indent",
            "link",
            "image",
            "video",
            "color",
            "background",
          ]}
          theme="snow"
          value={value}
          onChange={onChange}
          placeholder="Write something..."
        />
      </Stack>
    </Paper>
  );
};
