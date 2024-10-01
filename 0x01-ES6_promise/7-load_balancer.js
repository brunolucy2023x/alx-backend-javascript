// Author: Bruno Okoth
// This function accepts two promises, chinaDownload and USDownload, 
// and returns a promise that resolves or rejects as soon as one of 
// the promises in the array settles (either fulfills or rejects).

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
