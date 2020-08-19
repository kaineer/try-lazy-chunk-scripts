//
const requestBaseTask = () => import('./task');
// const requestMultifileTask = () => import('./multifile-task');
const requestAce = () => import('./ace');

const requestHtmlCssModules = () => [
  requestAce(),
  requestBaseTask(),
  import('./html-css-view'),
  import('./html-css-runner'),
  import('./html-css-checker')
];

const requestHtmlCssChallengeModules = () => [
  requestAce(),
  requestBaseTask(),
  import('./html-css-challenge-view'),
  import('./html-css-runner'),
  import('./html-css-challenge-checker')
];

const group = (title, cb) => {
  console.group(title);
  cb();
  console.groupEnd();
};

const typeToRequest = {
  'html-css': requestHtmlCssModules,
  'html-css-challenge': requestHtmlCssChallengeModules
};

const emptyRequest = () => [];

const getRequestModules = () => {
  const taskType = document.body.dataset.taskType;
  return (
    typeToRequest[taskType] || emptyRequest
  );
};

const requestModules = getRequestModules();

const promises = requestModules();
const displayResult = ({default: fn}) => console.log(fn());

Promise.all(promises).then(results => group(
  'Loading task parts',
  () => results.forEach(displayResult)
));
