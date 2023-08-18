import { utils, write } from 'xlsx'

export const createWorkbookWithSheet = (
  data: any[],
  sheetName: string = 'Sheet1'
) => {
  const worksheet = utils.json_to_sheet(data)
  const workbook = utils.book_new()
  utils.book_append_sheet(workbook, worksheet, sheetName)
  return workbook
}

export const createXlsxFile = (workbook: any, fileName: string) => {
  const fileContent = new Blob(
    [write(workbook, { bookType: 'xlsx', type: 'array' })],
    {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    }
  )
  return new File([fileContent], fileName, {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  })
}
