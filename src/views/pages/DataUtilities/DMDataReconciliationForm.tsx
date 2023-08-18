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
  edcFormFiles: z
    .instanceof(FileList, { message: 'File is required' })
    .refine((val) => val.length > 0, { message: 'File is required.' }),
  transferFile: z
    .instanceof(FileList, { message: 'File is required' })
    .refine((val) => val.length > 0, { message: 'File is required.' }),
  mappingFile: z
    .instanceof(FileList, { message: 'File is required' })
    .refine((val) => val.length > 0, { message: 'File is required.' }),
  oldResultFile: z
    .instanceof(FileList, { message: 'File is required' })
    .refine((val) => val.length > 0, { message: 'File is required.' }),
  password: z.string().optional(),
  emailTo: z.string().email('Invalid email.').optional(),
})

// Form Component
function DMDataReconciliationForm() {
  const dispatch = useDispatch()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  // Generates Job ID
  function generateJobId(): string {
    return `dm-data-reconciliation-${Date.now()}-${Math.round(
      Math.random() * 9999
    )}`
  }

  // Submission Handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    const jobId = generateJobId()
    const startTime = Math.floor(Date.now() / 1000)

    // Schema for excel file output
    const formDataForXlsx = [
      { Label: 'EDC Form Files', Value: values.edcFormFiles.length + ' files' },
      { Label: 'Transfer File', Value: values.transferFile[0].name },
      { Label: 'Mapping File', Value: values.mappingFile[0].name },
      { Label: 'Old Result File', Value: values.oldResultFile[0].name },
      { Label: 'Password', Value: values.password || 'N/A' },
      { Label: 'Email To', Value: values.emailTo || 'N/A' },
    ]

    const workbook = createWorkbookWithSheet(formDataForXlsx, 'FormData')
    const xlsxFile = createXlsxFile(workbook, 'dmdatareconciliation.xlsx')

    const result = createFileList(xlsxFile)

    const finishTime = Math.floor(Date.now() / 1000)

    dispatch(
      action.addDMDataReconciliationJob({
        job_id: jobId,
        name: 'DM Data Reconciliation Job',
        start_time: startTime,
        finish_time: finishTime,
        result: result,
        job_status: 'Success',
        files: {
          edcFormFiles: values.edcFormFiles,
          transferFile: values.transferFile,
          mappingFile: values.mappingFile,
          oldResultFile: values.oldResultFile,
        },
        password: values.password,
        emailTo: values.emailTo,
      })
    )

    toast.success('DM Data Reconciliation complete!')
  }

  // File change handler
  function _handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files
    const name = event.target.name as
      | 'edcFormFiles'
      | 'transferFile'
      | 'mappingFile'
      | 'oldResultFile'
    if (files) {
      form.setValue(name, files)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 font-header2"
      >
        {/* EDC Form Files input field */}
        <FormField
          control={form.control}
          name="edcFormFiles"
          render={() => (
            <FormItem>
              <FormLabel htmlFor="edcFormFiles">EDC Form Files</FormLabel>
              <FormControl>
                <Input
                  id="edcFormFiles"
                  name="edcFormFiles"
                  type="file"
                  multiple={true}
                  onChange={_handleFileChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Transfer File input field */}
        <FormField
          control={form.control}
          name="transferFile"
          render={() => (
            <FormItem>
              <FormLabel htmlFor="transferFile">Transfer File</FormLabel>
              <FormControl>
                <Input
                  id="transferFile"
                  name="transferFile"
                  type="file"
                  onChange={_handleFileChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Mapping File input field */}
        <FormField
          control={form.control}
          name="mappingFile"
          render={() => (
            <FormItem>
              <FormLabel htmlFor="mappingFile">Mapping File</FormLabel>
              <FormControl>
                <Input
                  id="mappingFile"
                  name="mappingFile"
                  type="file"
                  onChange={_handleFileChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Old Result File input field */}
        <FormField
          control={form.control}
          name="oldResultFile"
          render={() => (
            <FormItem>
              <FormLabel htmlFor="oldResultFile">Old Result File</FormLabel>
              <FormControl>
                <Input
                  id="oldResultFile"
                  name="oldResultFile"
                  type="file"
                  onChange={_handleFileChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Password input field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormControl>
                <Input id="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email recipients input field */}
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

export default DMDataReconciliationForm
