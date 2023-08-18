export interface ScheduledJob {
  emailTo: string[]
  enabled: boolean
  notification: string
  permission: string
  studyId: string
  name: string
  tasks: string
  trigger: string
}

export interface Job {
  job_id: string
  name: string
  job_status: string
  start_time: number
  finish_time?: number
}

export interface PreConfiguredJob extends Job {
  log_text: string
  study_id: string
  user_id: string
}

export interface DataJob extends Job {
  result: FileList
}

export interface DataComparisonJob extends DataJob {
  files: {
    file1: FileList
    file2: FileList
  }
  emailTo?: string
}

export interface DMDataReconciliationJob extends DataJob {
  files: {
    edcFormFiles: FileList
    transferFile: FileList
    mappingFile: FileList
    oldResultFile: FileList
  }
  password?: string
  emailTo?: string
}

export interface SpecSplittingJob extends DataJob {
  file: FileList
}
