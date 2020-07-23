import Solution from "./module/solution.js";
import Controls from "./module/controls.js";

const solution = new Solution("#dogs", ".image", ".searchField", ".search",    ".load", "https://dog.ceo/api/breeds/list/all").init();

const controls = new Controls('controles', 'h2', '.save', '.onSave').init();

