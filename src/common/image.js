export const urlProcessing = (url, number) => {
  const uri = url;
  return uri.replace('upload/', `upload/q_${number}/`);
};
