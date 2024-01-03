import {
  Avatar,
  AvatarGroup,
  Box,
  Chip,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { Fragment } from "react";
import { USERS } from "../../../config/data";
import { CustTab } from "../../GenericComponents/GeneralComponents/CustTab";
import PageHeadingComponent from "../../GenericComponents/GeneralComponents/PageHeadingComponent";
import { ShareCircle } from "../../SVGComponents";
import CodeBlock from "../../Syntax Highlights/CodeBlock";

const columns = [
  { field: "id", headerName: "id", width: 100 },
  {
    field: "avatar",
    headerName: "Avatar",
    flex: 1,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={params.row.image}
          alt={params.row.fullName}
          style={{ width: 40, height: 40 }}
        />
      </div>
    ),
  },
  { field: "fullName", headerName: "Full Name", flex: 1 },
  { field: "personalEmail", headerName: "Personal Email", flex: 1 },
  { field: "workEmail", headerName: "Work Email", flex: 1 },
  { field: "category", headerName: "Category", flex: 1 },
  {
    field: "status",
    headerName: "Status",
    width: 250,
    renderCell: (params) => {
      return (
        <Fragment>
          {params.value === "Active" ? (
            <Chip color="success" label="Active" />
          ) : (
            <Chip color="error" label="Inactive" />
          )}
        </Fragment>
      );
    },
  },
  {
    field: "platforms",
    headerName: "Platforms",
    flex: 1,
    renderCell: () => {
      return (
        <Fragment>
          <AvatarGroup total={6} variant="rounded">
            {USERS.map((item, index) => (
              <Tooltip title={item.toolTip} placement="top" arrow key={index}>
                <Avatar variant="rounded">{item.tableIcon}</Avatar>
              </Tooltip>
            ))}
          </AvatarGroup>
        </Fragment>
      );
    },
  },
];

export const SampleDataGrid = () => {
  const codeExample = `import {
    Avatar,
    AvatarGroup,
    Box,
    Chip,
    Paper,
    Tooltip,
    Typography,
  } from "@mui/material";
  import {DataGrid} from "@mui/x-data-grid";
  import React, {Fragment} from "react";
  import {USERS} from "../../../config/data";
  import {CustTab} from "../../GenericComponents/GeneralComponents/CustTab";
  import PageHeadingComponent from "../../GenericComponents/GeneralComponents/PageHeadingComponent";
  import {ShareCircle} from "../../SVGComponents";
  
  const columns = [
    {field: "id", headerName: "id", width: 100},
    {
      field: "avatar",
      headerName: "Avatar",
      flex: 1,
      renderCell: (params) => (
        <div style={{display: "flex", alignItems: "center"}}>
          <img
            src={params.row.image}
            alt={params.row.fullName}
            style={{width: 40, height: 40}}
          />
        </div>
      ),
    },
    {field: "fullName", headerName: "Full Name", flex: 1},
    {field: "personalEmail", headerName: "Personal Email", flex: 1},
    {field: "workEmail", headerName: "Work Email", flex: 1},
    {field: "category", headerName: "Category", flex: 1},
    {
      field: "status",
      headerName: "Status",
      width: 250,
      renderCell: (params) => {
        return (
          <Fragment>
            {params.value === "Active" ? (
              <Chip color="success" label="Active" />
            ) : (
              <Chip color="error" label="Inactive" />
            )}
          </Fragment>
        );
      },
    },
    {
      field: "platforms",
      headerName: "Platforms",
      flex: 1,
      renderCell: () => {
        return (
          <Fragment>
            <AvatarGroup total={6} variant="rounded">
              {USERS.map((item, index) => (
                <Tooltip title={item.toolTip} placement="top" arrow key={index}>
                  <Avatar variant="rounded">{item.tableIcon}</Avatar>
                </Tooltip>
              ))}
            </AvatarGroup>
          </Fragment>
        );
      },
    },
  ];
  
  export const SampleDataGrid = () => {
    return (
      <Fragment>
        <PageHeadingComponent
          icon={<ShareCircle />}
          subheading={"MUI X"}
          pageTitle={"Data Grid"}
          subheading2={
            "Lorem ipsum dolor sit amet consectetur. Urna dictum pulvinar a orci eu nunc diam in neque."
          }
          link={"https://mui.com/x/react-data-grid/"}
          link2={"https://mui.com/material-ui/react-accordion/"}
        />
  
        <Paper elevation={1} style={{width: "100%"}}>
          <Typography variant="h4">Basic</Typography>
          <CustTab
            label1={"Preview"}
            label2={"JSX"}
            tabContent={
              <DataGrid
                rows={USERS}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {page: 0, pageSize: 10},
                  },
                }}
                // checkboxSelection
                autoHeight
              />
            }
          />
        </Paper>
      </Fragment>
    );
  };
  
  `;

  return (
    <Fragment>
      <PageHeadingComponent
        icon={<ShareCircle />}
        subheading={"MUI X"}
        pageTitle={"Data Grid"}
        subheading2={
          "Lorem ipsum dolor sit amet consectetur. Urna dictum pulvinar a orci eu nunc diam in neque."
        }
        link={"https://mui.com/x/react-data-grid/"}
        link2={"https://mui.com/material-ui/react-accordion/"}
      />

      <Stack spacing={4}>
        <Paper elevation={1} style={{ width: "100%" }}>
          <Typography variant="h4">Basic</Typography>
          <CustTab
            label1={"Preview"}
            label2={"JSX"}
            tabContent={
              <Paper>
                <DataGrid
                  rows={USERS}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 10 },
                    },
                  }}
                  // checkboxSelection
                  autoHeight
                />
              </Paper>
            }
            syntaxTab={<CodeBlock code={codeExample} />}
          />
        </Paper>

        <Paper elevation={1} style={{ width: "100%" }}>
          <Typography variant="h4">Custom</Typography>
          <CustTab
            label1={"Preview"}
            label2={"JSX"}
            tabContent={
              <Paper>
                <DataGrid
                  rows={USERS}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 10 },
                    },
                  }}
                  // checkboxSelection
                  autoHeight
                />
              </Paper>
            }
            syntaxTab={<CodeBlock code={codeExample} />}
          />
        </Paper>
      </Stack>
    </Fragment>
  );
};
