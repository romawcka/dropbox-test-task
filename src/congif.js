import { Dropbox } from "dropbox";

const dropboxToken = 'sl.Bfs0-KQf4cQC2rZxksjjAGnSxh5uI9Vy1piPQe1_a8CPs7fv1s6Yrh-Q4YgPq0ug5oUOV13G70n5oyBxFJhgKjaxHZnUGxXFjA7ArB0bjfokf7MLXqB5zAs_VKD2pUY-ZzAu9iHHBak';

export const dropbox = new Dropbox({ accessToken: dropboxToken });