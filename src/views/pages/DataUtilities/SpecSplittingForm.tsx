// UI Components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/views/components/shadcn/form'
import { Input } from '@/views/components/shadcn/input'
import { Button } from '@/views/components/shadcn/button'
import { toast } from 'react-hot-toast'

// Redux
import * as action from '@/store/actions/dataActions'
import { useDispatch } from 'react-redux'

// Form Handling
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Utilities
import { createWorkbookWithSheet, createXlsxFile } from '@/utils/excelUtils'
import { createFileList } from '@/utils/convertFileList'

// Schema for form validation
const formSchema = z.object({
  file: z.instanceof(FileList, {
    message: 'File is required',
  }),
})

// Form Component
function SpecSplittingForm() {
  const dispatch = useDispatch()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  // Generates Job ID
  function generateJobId(): string {
    return `spec-splitting-${Date.now()}-${Math.round(Math.random() * 9999)}`
  }

  // Submission Handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    const jobId = generateJobId()
    const startTime = Math.floor(Date.now() / 1000)

    const formDataForXlsx = [{ Label: 'File', Value: values.file[0].name }]

    const workbook = createWorkbookWithSheet(formDataForXlsx, 'FormData')
    const xlsxFile = createXlsxFile(workbook, 'specsplitting.xlsx')

    const result = createFileList(xlsxFile)

    const finishTime = Math.floor(Date.now() / 1000)

    dispatch(
      action.addSpecSplittingJob({
        job_id: jobId,
        name: 'Spec Splitting Job',
        start_time: startTime,
        finish_time: finishTime,
        job_status: 'Success',
        result: result,
        file: values.file,
      })
    )

    toast.success('Spec Splitting complete!')
  }

  // File change handler
  function _handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files
    if (files) {
      form.setValue('file', files)
    }
  }

  return (
    <Form {...form}>
      {/* file input field */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 font-header2"
      >
        <FormField
          control={form.control}
          name="file"
          render={() => (
            <FormItem>
              <FormLabel htmlFor="file">File</FormLabel>
              <FormControl>
                <Input id="file" type="file" onChange={_handleFileChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default SpecSplittingForm
