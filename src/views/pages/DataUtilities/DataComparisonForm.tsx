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
  file1: z.instanceof(FileList, { message: 'File is required' }),
  file2: z.instanceof(FileList, { message: 'File is required' }),
  headerRow: z
    .string()
    .refine((val) => !Number.isNaN(parseInt(val, 10)), {
      message: 'Expected number, received a string',
    })
    .refine((val) => parseInt(val, 10) > 0, {
      message: 'Header row must be greater than 0.',
    }),
  indexKeys: z.string(),
  skipVariables: z.string().optional(),
  emailTo: z.string().email('Invalid email.').optional(),
})

// Form Component
function DataComparisonForm() {
  const dispatch = useDispatch()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      headerRow: '1',
      indexKeys: '',
    },
  })

  // Generates Job ID
  function generateJobId(): string {
    return `data-comparison-${Date.now()}-${Math.round(Math.random() * 9999)}`
  }

  // Submission Handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    const jobId = generateJobId()
    const startTime = Math.floor(Date.now() / 1000)

    const formDataForXlsx = [
      { Label: 'Header Row', Value: values.headerRow },
      { Label: 'Index Keys', Value: values.indexKeys },
      { Label: 'Skip Variables', Value: values.skipVariables || 'N/A' },
      { Label: 'Email To', Value: values.emailTo || 'N/A' },
    ]

    const workbook = createWorkbookWithSheet(formDataForXlsx, 'FormData')
    const xlsxFile = createXlsxFile(workbook, 'datacomparison.xlsx')
    const result = createFileList(xlsxFile)

    const finishTime = Math.floor(Date.now() / 1000)

    dispatch(
      action.addDataComparisonJob({
        job_id: jobId,
        name: 'Data Comparison Job',
        start_time: startTime,
        finish_time: finishTime,
        job_status: 'Success',
        result: result,
        files: {
          file1: values.file1,
          file2: values.file2,
        },
        emailTo: values.emailTo,
      })
    )
    toast.success('Data Comparison complete!')
  }

  // File change handler
  function _handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files
    const name = event.target.name as 'file1' | 'file2'
    if (files) {
      form.setValue(name, files)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 font-header2 "
      >
        {/* File 1 input field */}
        <FormField
          control={form.control}
          name="file1"
          render={() => (
            <FormItem>
              <FormLabel htmlFor="file1">File 1</FormLabel>
              <FormControl>
                <Input
                  id="file1"
                  name="file1"
                  type="file"
                  onChange={_handleFileChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* File 2 input field */}
        <FormField
          control={form.control}
          name="file2"
          render={() => (
            <FormItem>
              <FormLabel htmlFor="file2">File 2</FormLabel>
              <FormControl>
                <Input
                  id="file2"
                  name="file2"
                  type="file"
                  onChange={_handleFileChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row items-start space-x-6">
          {/* Header row input field */}
          <FormField
            control={form.control}
            name="headerRow"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="headerRow">Header Row</FormLabel>
                <FormControl>
                  <Input
                    id="headerRow"
                    type="number"
                    className="w-16"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Index keys input field */}
          <FormField
            control={form.control}
            name="indexKeys"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="indexKeys">Index Keys</FormLabel>
                <FormControl>
                  <Input id="indexKeys" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Skip variables input field */}
        <FormField
          control={form.control}
          name="skipVariables"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="skipVariables">Skip Variables</FormLabel>
              <FormControl>
                <Input id="skipVariables" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email Recipients input field */}
        <FormField
          control={form.control}
          name="emailTo"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="emailTo">Email To</FormLabel>
              <FormControl>
                <Input id="emailTo" {...field} />
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

export default DataComparisonForm
