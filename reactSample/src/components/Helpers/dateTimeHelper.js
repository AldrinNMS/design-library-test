import {format} from "date-fns";
import {DATEFORMAT} from "../../config/enums";
/* eslint-disable no-undef */

export const formatDate = (date, dateForm = DATEFORMAT.DATE) => {
  let formatedDate = format(date, dateForm);
  return formatedDate;
};

export const formatTime = (date, dateForm = DATEFORMAT.TIME) => {
  let formatedDate = format(date, dateForm);
  return formatedDate;
};

export const formatDateTime = (date, dateForm = DATEFORMAT.DATE_TIME) => {
  let formatedDate = format(date, dateForm);
  return formatedDate;
};

export const formatDateTimeTz = (date, dateForm = DATEFORMAT.DATE_TIME_TZ) => {
  let formatedDate = format(date, dateForm);
  return formatedDate;
};
