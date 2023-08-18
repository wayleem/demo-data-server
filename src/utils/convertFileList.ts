export function createFileList(file: File): FileList {
  const dataTransfer = new DataTransfer()
  dataTransfer.items.add(file)
  return dataTransfer.files
}
