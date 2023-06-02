import { Dropbox } from "dropbox";

const dropboxToken = 'sl.Bfhakc6fR1T5aXYQnDok_VTEchPlUOGOGd8Ywxt5ZUeH-cTNS8mtNzZTtjPaIWXXsHRdCbJHiPR_ABSHh_M9ho23yoFb_et54C5XP9_DPIteXXO_GWZ_I9ysz9UbtNdt35Oqnz1PH-A';

export const dropbox = new Dropbox({ accessToken: dropboxToken });